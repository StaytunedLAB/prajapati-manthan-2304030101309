// ===============================
//  Employee Attendance Processor
// ===============================

function toMinutes(timeString) {
  const parts = timeString.split(":");
  if (parts.length !== 2) return null;

  const h = Number(parts[0]);
  const m = Number(parts[1]);

  if (isNaN(h) || isNaN(m)) return null;

  return h * 60 + m;
}

function processAttendance(input) {
  let status = "complete";
  let totalMinutes = 0;
  let overtimeMinutes = 0;
  let errorMessage = "";
  let note = "";

  try {
    const checkIn = input.checkIn;
    const checkOut = input.checkOut;

    // Missing check-in/check-out
    if (!checkIn || !checkOut) {
      status = "incomplete";
      totalMinutes = 0;
      note = "Missing check-in or check-out";
      return buildSummary();
    }

    // Convert times
    const inMin = toMinutes(checkIn);
    const outMin = toMinutes(checkOut);

    if (inMin === null || outMin === null) {
      status = "error";
      errorMessage = "Invalid time format";
      return buildSummary();
    }

    // Basic duration
    let working = outMin - inMin;

    // Handle break
    if (input.break && input.break.start) {
      const bStart = toMinutes(input.break.start);
      let bEnd = null;

      if (input.break.end) {
        bEnd = toMinutes(input.break.end);
      }

      if (bStart === null) {
        status = "error";
        errorMessage = "Invalid break start format";
        return buildSummary();
      }

      if (bEnd === null) {
        working -= 30; // default 30-minute break
        note = "Break end missing. Default 30 minutes applied.";
      } else {
        working -= (bEnd - bStart);
      }
    }

    // Negative duration
    if (working < 0) {
      status = "invalid";
      totalMinutes = 0;
      note = "Negative working duration";
      return buildSummary();
    }

    totalMinutes = working;

    // Overtime
    if (input.overtimeApproved === true && totalMinutes > 480) {
      overtimeMinutes = totalMinutes - 480;
      note = "Overtime calculated";
    }

  } catch (err) {
    status = "error";
    errorMessage = "System Error: " + err.message;
  } finally {
    console.log("Attendance processed successfully");
  }

  return buildSummary();

  function buildSummary() {
    return {
      employeeId: input.employeeId,
      date: input.date,
      status,
      totalMinutes,
      overtimeMinutes,
      note,
      errorMessage
    };
  }
}

// ===============================
// Example Usage
// ===============================

const data = {
  employeeId: "EMP001",
  date: "2025-12-10",
  checkIn: "09:00",
  checkOut: "18:30",
  break: {
    start: "13:00",
    end: "13:45"
  },
  overtimeApproved: true
};

console.log(processAttendance(data));

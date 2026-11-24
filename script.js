// Years of experience since start date. HTML ships a static fallback, so the page works with JS disabled.
(function () {
    const startDate = new Date("2019-01-15");
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    const monthDiff = today.getMonth() - startDate.getMonth();

    // Adjust if the anniversary hasn't happened yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
        years--;
    }

    ["expYears", "expYears2"].forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.textContent = years;
    });
})();

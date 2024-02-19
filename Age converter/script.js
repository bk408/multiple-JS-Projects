function calculateAge() {
    var birthdate = document.getElementById("birthdate").value;

    var userBirthDate = new Date(birthdate);  // Get the user Birth Date

    var currentDate = new Date(); // Get the current date

    var yearDiff = currentDate.getFullYear() - userBirthDate.getFullYear();  // Find year diff from current year - user birth year

    var monthDiff = currentDate.getMonth() - userBirthDate.getMonth();  // find month diff from current month - user month


    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < userBirthDate.getDate())) {
        yearDiff--;
    }

    document.getElementById('result').innerHTML = "Age:" + yearDiff + ""
    
}
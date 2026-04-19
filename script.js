function calculate_temperature() {
    let c = document.getElementById("celsius").value;
    let f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f
}

function calculate_weight() {
    let kg = document.getElementById("kilo").value;
    let lb = kg * 2.205;
    document.getElementById("pounds").value = lb;
}

function calculate_distance() {
    let km = document.getElementById("km").value;
    let miles = km / 1.609;
    document.getElementById("miles").value = miles;
}
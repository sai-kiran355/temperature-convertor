function convertTemperature()
{
let val = document.getElementById("degree").value; let result = document.getElementById("result");
let input = document.getElementById("input").value; let output = document.getElementById("output").value;

//for CELSIUS to FAHRENHEIT

if(input === "celsius" && output === "fahrenheit")
{
result.value = (val * 9/5) + 32;
}

//FOR CELSIUS TO KELVIN

else if(input === "celsius" && output === "kelvin")
{
result.value = parseFloat(val) + 273.15;
}

// for FAHRENHEIT to CELSIUS

else if(input === "fahrenheit" && output === "celsius")
{
result.value = (val - 32) * 5 / 9;
}

//FOR FAHRENHEIT TO KELVIN

else if(input === "fahrenheit" && output === "kelvin")
{
result.value = ((val - 32) * 5/9) + 273.15;
}

//for KELVIN TO CELSIUS

else if(input === "kelvin" && output === "celsius")
 
{
result.value = val - 273.15;
}

//FOR KELVIN TO FAHRENHEIT

else if(input === "kelvin" && output ==="fahrenheit")
{
result.value = ((val - 273.15) * 9/5) + 32;
}

// SAME UNIT LIKE CELSIUS TO CELSIUS , FAHRENHEIT TO FAHRENHEIT AND KELVIN TO KELVIN

else if(input === output)
{
result.value = val;
}
}

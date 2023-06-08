const getColor = () =>
//colors are in hexadecimal numbers - hex codes
{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#"+ randomNumber.toString(16); // hexadecimal unit is 16
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode);
}



//event call
document.getElementById("btn").addEventListener(
    "click", getColor
)

//initial call
getColor();
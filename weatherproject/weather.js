
function press(){
    
    // Getting Date and time in order to get the temperature value hourly and weely
    let date = new Date();
    let day = date.getDay();
    let listday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = listday[day];
    let hour = date.getHours();
    let min = date.getMinutes();
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    let time = hour + ":" + min;
    document.getElementById("date").innerText = `${today}`;
    document.getElementById("timee").innerText = `${time}`;


    // Getting Input id to store the City Value and fetching link
    let place = document.getElementById("write").value;

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=MBJMH7SM82F25Q47FFLZN5MHU&contentType=json`)

        .then((response) => {
            return response.json()
        }).then((data) => 
        {
            
            // Getting Temperature From API

            document.getElementById("hour0").textContent = `${data.days[0].hours.find(clock => clock.datetime === "00:00:00").temp}ºC `;

            //  Updating Images According to the Climate
            let zeroimg = document.getElementById("imgzero");
            let zeroimgvalue = data.days[0].hours.find(clock => clock.datetime === "00:00:00").icon;
            const zeroimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "https://i.ibb.co/1nxNGHL/10.png",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            zeroimg.src = zeroimgupdate[zeroimgvalue];


            document.getElementById("hour1").textContent = `${data.days[0].hours.find(clock => clock.datetime === "01:00:00").temp}ºC `;
            let oneimg = document.getElementById("imgone");
            let oneimgvalue = data.days[0].hours.find(clock => clock.datetime === "01:00:00").icon;
            const oneimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "https://i.ibb.co/1nxNGHL/10.png",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            oneimg.src = oneimgupdate[oneimgvalue];



            document.getElementById("hour2").textContent = `${data.days[0].hours.find(clock => clock.datetime === "02:00:00").temp}ºC `;

            let twoimg = document.getElementById("imgtwo");
            let twoimgvalue = data.days[0].hours.find(clock => clock.datetime === "02:00:00").icon;

            const twoimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "https://i.ibb.co/1nxNGHL/10.png",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            twoimg.src = twoimgupdate[twoimgvalue];



            document.getElementById("hour3").textContent = `${data.days[0].hours.find(clock => clock.datetime === "03:00:00").temp}ºC `;

            let threeimg = document.getElementById("imgthree");
            let threeimgvalue = data.days[0].hours.find(clock => clock.datetime === "03:00:00").icon;

            const threeimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "https://i.ibb.co/1nxNGHL/10.png",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            threeimg.src = threeimgupdate[threeimgvalue];


            document.getElementById("hour4").textContent = `${data.days[0].hours.find(clock => clock.datetime === "04:00:00").temp}ºC `;

            let fourimg = document.getElementById("imgfour");
            let fourimgvalue = data.days[0].hours.find(clock => clock.datetime === "04:00:00").icon;

            const fourimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "https://i.ibb.co/1nxNGHL/10.png",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            fourimg.src = fourimgupdate[fourimgvalue];


            document.getElementById("hour5").textContent = `${data.days[0].hours.find(clock => clock.datetime === "05:00:00").temp}ºC `;

            let fiveimg = document.getElementById("imgfive");
            let fiveimgvalue = data.days[0].hours.find(clock => clock.datetime === "05:00:00").icon;

            const fiveimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "https://i.ibb.co/1nxNGHL/10.png",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            fiveimg.src = fiveimgupdate[fiveimgvalue];


            document.getElementById("hour6").textContent = `${data.days[0].hours.find(clock => clock.datetime === "06:00:00").temp}ºC `;

            let siximg = document.getElementById("imgsix");
            let siximgvalue = data.days[0].hours.find(clock => clock.datetime === "06:00:00").icon;

            const siximgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "https://i.ibb.co/1nxNGHL/10.png",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            siximg.src = siximgupdate[siximgvalue];


            document.getElementById("hour7").textContent = `${data.days[0].hours.find(clock => clock.datetime === "07:00:00").temp}ºC `;

            let sevenimg = document.getElementById("imgseven");
            let sevenimgvalue = data.days[0].hours.find(clock => clock.datetime === "07:00:00").icon;

            const sevenimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "https://i.ibb.co/1nxNGHL/10.png",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png ",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            sevenimg.src = sevenimgupdate[sevenimgvalue];


            document.getElementById("hour8").textContent = `${data.days[0].hours.find(clock => clock.datetime === "08:00:00").temp}ºC `;

            let eightimg = document.getElementById("imgeight");
            let eightimgvalue = data.days[0].hours.find(clock => clock.datetime === "08:00:00").icon;

            const eightimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "https://i.ibb.co/1nxNGHL/10.png",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            eightimg.src = eightimgupdate[eightimgvalue];


            document.getElementById("hour9").textContent = `${data.days[0].hours.find(clock => clock.datetime === "09:00:00").temp}ºC `;

            let nineimg = document.getElementById("imgnine");
            let nineimgvalue = data.days[0].hours.find(clock => clock.datetime === "09:00:00").icon;

            const nineimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            nineimg.src = nineimgupdate[nineimgvalue];


            document.getElementById("hour10").textContent = `${data.days[0].hours.find(clock => clock.datetime === "10:00:00").temp}ºC `;

            let tenimg = document.getElementById("imgten");
            let tenimgvalue = data.days[0].hours.find(clock => clock.datetime === "10:00:00").icon;

            const tenimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            tenimg.src = tenimgupdate[tenimgvalue];


            document.getElementById("hour11").textContent = `${data.days[0].hours.find(clock => clock.datetime === "11:00:00").temp}ºC `;

            let elevenimg = document.getElementById("imgeleven");
            let elevenimgvalue = data.days[0].hours.find(clock => clock.datetime === "11:00:00").icon;

            const elevenimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            elevenimg.src = elevenimgupdate[elevenimgvalue];


            document.getElementById("hour12").textContent = `${data.days[0].hours.find(clock => clock.datetime === "12:00:00").temp}ºC `;

            let twelveimg = document.getElementById("imgtwelve");
            let twelveimgvalue = data.days[0].hours.find(clock => clock.datetime === "12:00:00").icon;

            const twelveimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            twelveimg.src = twelveimgupdate[twelveimgvalue];


            document.getElementById("hour13").textContent = `${data.days[0].hours.find(clock => clock.datetime === "13:00:00").temp}ºC `;

            let thirteenimg = document.getElementById("imgthirteen");
            let thirteenimgvalue = data.days[0].hours.find(clock => clock.datetime === "13:00:00").icon;

            const thirteenimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            thirteenimg.src = thirteenimgupdate[thirteenimgvalue];


            document.getElementById("hour14").textContent = `${data.days[0].hours.find(clock => clock.datetime === "14:00:00").temp}ºC `;

            let forteenimg = document.getElementById("imgfourteen");
            let forteenimgvalue = data.days[0].hours.find(clock => clock.datetime === "14:00:00").icon;


            const forteenimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            forteenimg.src = forteenimgupdate[forteenimgvalue];


            document.getElementById("hour15").textContent = `${data.days[0].hours.find(clock => clock.datetime === "15:00:00").temp}ºC `;

            let fifteenimg = document.getElementById("imgfifteen");
            let fifteenimgvalue = data.days[0].hours.find(clock => clock.datetime === "15:00:00").icon;

            const fifteenimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            fifteenimg.src = fifteenimgupdate[fifteenimgvalue];


            document.getElementById("hour16").textContent = `${data.days[0].hours.find(clock => clock.datetime === "16:00:00").temp}ºC `;

            let sixteenimg = document.getElementById("imgsixteen");
            let sixteenimgvalue = data.days[0].hours.find(clock => clock.datetime === "16:00:00").icon;

            const sixteenimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            sixteenimg.src = sixteenimgupdate[sixteenimgvalue];


            document.getElementById("hour17").textContent = `${data.days[0].hours.find(clock => clock.datetime === "17:00:00").temp}ºC `;

            let seventeenimg = document.getElementById("imgseventeen");
            let seventeenimgvalue = data.days[0].hours.find(clock => clock.datetime === "17:00:00").icon;

            const seventeenimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            seventeenimg.src = seventeenimgupdate[seventeenimgvalue];


            document.getElementById("hour18").textContent = `${data.days[0].hours.find(clock => clock.datetime === "18:00:00").temp}ºC `;

            let eighteenimg = document.getElementById("imgeighteen");
            let eighteenimgvalue = data.days[0].hours.find(clock => clock.datetime === "18:00:00").icon;

            const eighteenimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            eighteenimg.src = eighteenimgupdate[eighteenimgvalue];


            document.getElementById("hour19").textContent = `${data.days[0].hours.find(clock => clock.datetime === "19:00:00").temp}ºC `;

            let nineteenimg = document.getElementById("imgnineteen");
            let nineteenimgvalue = data.days[0].hours.find(clock => clock.datetime === "19:00:00").icon;

            const nineteenimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            nineteenimg.src = nineteenimgupdate[nineteenimgvalue];


            document.getElementById("hour20").textContent = `${data.days[0].hours.find(clock => clock.datetime === "20:00:00").temp}ºC `;

            let twentytimg = document.getElementById("imgtwenty");
            let twentyimgvalue = data.days[0].hours.find(clock => clock.datetime === "20:00:00").icon;

            const twentyimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            twentytimg.src = twentyimgupdate[twentyimgvalue];


            document.getElementById("hour21").textContent = `${data.days[0].hours.find(clock => clock.datetime === "21:00:00").temp}ºC `;

            let twentyoneimg = document.getElementById("imgtwentyone");
            let twentyoneimgvalue = data.days[0].hours.find(clock => clock.datetime === "21:00:00").icon;

            const twentyoneimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            twentyoneimg.src = twentyoneimgupdate[twentyoneimgvalue];


            document.getElementById("hour22").textContent = `${data.days[0].hours.find(clock => clock.datetime === "22:00:00").temp}ºC `;

            let twentytwoimg = document.getElementById("imgtwentytwo");
            let twentytwoimgvalue = data.days[0].hours.find(clock => clock.datetime === "22:00:00").icon;

            const twentytwoimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            twentytwoimg.src = twentytwoimgupdate[twentytwoimgvalue];


            document.getElementById("hour23").textContent = `${data.days[0].hours.find(clock => clock.datetime === "23:00:00").temp}ºC `;

            let twentythreeimg = document.getElementById("imgtwentythree");
            let twentythreeimgvalue = data.days[0].hours.find(clock => clock.datetime === "23:00:00").icon;

            const twentythreeimgupdate = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            twentythreeimg.src = twentythreeimgupdate[twentythreeimgvalue];

            //  Main Temperature Changing and Icon
            let imageupdate = document.getElementById("updateimage");
            let changeimage = data.days[0].icon;

            const imageurls = {
                "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "rain": "https://i.ibb.co/kBd2NTS/39.png",
                "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                "clear-night": "../assets/weatherIcons/clear-night",
                "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"
            };
            imageupdate.src = imageurls[changeimage]


            // Getting Clody Perl AND Location by searching City

            document.getElementById("degree").textContent = `${data.days[0].temp}ºC `;
            document.getElementById("condition").textContent = `${data.days[0].conditions}`;
            document.getElementById("percentage").textContent = `${"Perc-" + data.days[0].precip}%`;
            document.getElementById("citydetails").textContent = `${data.resolvedAddress} `;

            // Rendering Today Highlights Dta

            let uvdata = document.getElementById("uvindex");
            let uvstore = data.days[0].uvindex;

            uvdata.textContent = uvstore;

            function uvindexstatus(uvstore) {
                if (uvstore <= 2) {
                    document.getElementById("uvupdates").textContent = `Low`
                }
                else if (uvstore <= 5) {
                    document.getElementById("uvupdates").textContent = `Moderate`
                }
                else if (uvstore <= 7) {
                    document.getElementById("uvupdates").textContent = `High`
                }
                else {
                    document.getElementById("uvupdates").textContent = `Very High`
                }

            }
            uvindexstatus(uvstore)


            document.getElementById("windspeed").textContent = data.days[0].windspeed

            document.getElementById("sunrise").textContent = data.days[0].sunrise
            document.getElementById("sunset").textContent = data.days[0].sunset

            let humidstatusElement = document.getElementById("humidpercentage");
            let humidstatus = data.days[0].humidity;

            humidstatusElement.textContent = humidstatus;

            function humidupdate(humidstatus) {
                if (humidstatus <= 30) {
                    document.getElementById("humidspeed").textContent = `Low`;
                }
                else if (humidstatus <= 60) {
                    document.getElementById("humidspeed").textContent = `Moderate`;
                }
                else if (humidstatus <= 90) {
                    document.getElementById("humidspeed").textContent = `High`;
                }
                else {
                    document.getElementById("humidspeed").textContent = `Very High`;
                }
            }

            humidupdate(humidstatus);

            let visibilitydata = document.getElementById("visiblerange");
            let visibilitystore = data.days[0].visibility

            visibilitydata.textContent = visibilitystore

            function visibiltyupdate(visibilitystore) {
                if (visibilitystore <= 0.3) {
                    document.getElementById("visibledata").textContent = `Dense Fog`
                }
                else if (visibilitystore <= 0.16) {
                    document.getElementById("visibledata").textContent = `Moderate Fog`
                }
                else if (visibilitystore <= 1.13) {
                    document.getElementById("visibledata").textContent = `Light Fog`
                }
                else if (visibilitystore <= 5.4) {
                    document.getElementById("visibledata").textContent = `Light Mist`
                }
                else if (visibilitystore <= 10.8) {
                    document.getElementById("visibledata").textContent = `Clear Air`
                }
                else {
                    document.getElementById("visibledata").textContent = `Very Clear Air`
                }
            }
            visibiltyupdate(visibilitystore);


            let airdata = document.getElementById("airspeed");
            let airstore = data.days[0].severerisk;

            airdata.textContent = airstore;

            function aircheck(airstore) {
                if (airstore <= 50) {
                    document.getElementById("aircondition").textContent = `Good👌`
                }
                else if (airstore <= 100) {
                    document.getElementById("aircondition").textContent = `Moderate😐
                    `
                }
                else if (airstore <= 150) {
                    document.getElementById("aircondition").textContent = `UnHealthy😷
                    `
                }
                else {
                    document.getElementById("aircondition").textContent = `Very UnHealthy😨`
                }
            }
            aircheck(airstore);



            function backImages() {
                let imgstore = data.days[0].icon;

                if (imgstore === "partly-cloudy-day") {
                    document.getElementById("bgimage").style.backgroundImage = `url("/assets/weatherBackImages/partly-cloudy-day")`;
                }
                else if (imgstore === "partly-cloudy-night") {
                    document.getElementById("bgimage").style.backgroundImage = `url("/assets/weatherBackImages/partly-cloudy-night")`;
                }
                else if (imgstore === "rain") {
                    document.getElementById("bgimage").style.backgroundImage = `url("/assets/weatherBackImages/rain")`;
                }
                else if (imgstore === "clear-day") {
                    document.getElementById("bgimage").style.backgroundImage = `url("/assets/weatherBackImages/clear-day")`;
                }
                else if (imgstore === "clear-night") {
                    document.getElementById("bgimage").style.backgroundImage = `url("/assets/weatherBackImages/clear-night")`;
                }
                else {
                    document.getElementById("bgimage").style.backgroundImage = `url("https://tse1.mm.bing.net/th?id=OIP.USacE-VQRr3CCk5qX48CuAHaE8&pid=Api&P=0&h=180")`
                }
            }
            backImages();

            function celsiusToFahrenheit(celsius) {
                return ((celsius * 9 / 5) + 32).toFixed(1);
            }

           
            
            document.getElementById("fahren").addEventListener("click", function(event) {
                event.preventDefault(); 
                fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=MBJMH7SM82F25Q47FFLZN5MHU&contentType=json`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                                })
                                .then((data) => {
                                document.getElementById("degree").textContent = `${celsiusToFahrenheit(data.days[0].temp)}°F`;
                                for (let i = 0; i < 24; i++) {
                                    document.getElementById(`hour${i}`).textContent = `${celsiusToFahrenheit(data.days[0].hours[i].temp)}°F`;
                                    }
                                })
                                .catch((error) => {
                                    console.error('Error fetching weather data:', error);
                                });
                              });

                              function createWeekCards() {
                                document.getElementById("weekdivs").innerHTML = "";

                                for (let i = 0; i < 7; i++) {
                                    const card = document.createElement("div");
                                    card.classList.add("card");
                                    const img = document.createElement("img");
                                    let imgweather = data.days[i].icon
                                    
                                    let weatherurls = {
                                        "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
                                        "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
                                        "rain": "https://i.ibb.co/kBd2NTS/39.png",
                                        "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
                                        "clear-night": "../assets/weatherIcons/clear-night",
                                        "cloudy": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-weather-6318666-5211351.png",
                                        "snow": "https://tse4.mm.bing.net/th?id=OIP.au-aGpJze3UBE1WaAmgzawHaHa&pid=Api&P=0&h=180"

                                    }
                                    img.src = weatherurls[imgweather]


                                    const heading = document.createElement("p");
                                    if (i === 0) {
                                        heading.textContent =   today;
                                    } else {
                                        // Calculate next day
                                        let nextDayIndex = (day + i) % 7;
                                        heading.textContent = listday[nextDayIndex];
                                    }

                                    const paragraph = document.createElement("p");
                                    
                                    if (data.days[i]) {
                                        paragraph.textContent = `${data.days[i].temp}ºC`; 
                                    } else {
                                        paragraph.textContent = "No"; 
                                    }
                                    
                                    
                                    card.appendChild(heading);
                                    card.appendChild(img);
                                    card.appendChild(paragraph);
                                    document.getElementById("weekdivs").appendChild(card);
                                }

                                function convertToCelsius(fahrenheit) {
                                    return (fahrenheit - 32) * 5 / 9;
                                }
                                
                                function weekcelsius() {
                                    const paragraphs = document.querySelectorAll("#weekdivs .card p:last-child");
                                    
                                    paragraphs.forEach((paragraph, i) => {
                                        if (data.days[i]) {
                                            const fahrenheit = data.days[i].temp;
                                            const celsius = convertToCelsius(fahrenheit);
                                            paragraph.textContent = `${celsius.toFixed(2)}°C`; 
                                        } else {
                                            paragraph.textContent = ""; 
                                        }
                                    });
                                }
                                
                                document.getElementById("cent").addEventListener("click", weekcelsius);
                                
                                function convertToFahrenheit(celsius) {
                                    return celsius * 9 / 5 + 32;
                                }
                                
                                function weekfahrein() {
                                    const paragraphs = document.querySelectorAll("#weekdivs .card p:last-child");
                                    
                                    paragraphs.forEach((paragraph, i) => {
                                        if (data.days[i]) {
                                            const celsius = data.days[i].temp;
                                            const fahrenheit = convertToFahrenheit(celsius);
                                            paragraph.textContent = `${fahrenheit.toFixed(2)}°F`; 
                                        } else {
                                            paragraph.textContent = "N/A"; // Display "N/A" if data is not available
                                        }
                                    });
                                }
                                
                                document.getElementById("fahren").addEventListener("click", weekfahrein);
                                
                             }

                            document.getElementById("weekreport").addEventListener("click", function() {
                                createWeekCards();
                                document.getElementById("weathercards").style.display = "none"
                                document.getElementById("weekdivs").style.display = ""

                              });
                            document.getElementById("todayreport").addEventListener("click",function(){
                                press()
                                document.getElementById("weekdivs").style.display = "none"
                                document.getElementById("weathercards").style.display = ""

                            })
                           
                            
                            
                            
                            
    }).catch((err) =>{
        alert(`City Not Found`)
    });

        
        }




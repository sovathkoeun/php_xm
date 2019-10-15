const url = "https://jsonplaceholder.typicode.com/users";
async function getdata () {
    const response = await fetch(url);
    const data     = await response.json();
    const result   = document.querySelector('table');
    //Using async – await function to get this data
    await data.forEach(item => {
        // de-truturing
        const {id,name,email,phone,website} = item;
          if(id <= 5){
                result.innerHTML +=`
                <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${website}</td>
                </tr>
            `;
        }
    })
}
getdata();
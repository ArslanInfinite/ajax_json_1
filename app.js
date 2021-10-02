document.getElementById('button1').addEventListener('click', loadCustomer)

function loadCustomer(){
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'customer.json', true)

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText)
            const customer = JSON.parse(this.responseText)
            const output = `
                <ul>
                    <li>ID: ${customer.id}</l1>
                    <li>Name: ${customer.name}</l1>
                    <li>Company: ${customer.company}</l1>
                    <li>Phone: ${customer.phone}</l1>
                </ul>   
            `

            document.getElementById('customer').innerHTML = output
        }
    }

    xhr.send
}
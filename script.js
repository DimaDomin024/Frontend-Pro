const book = {
    contacts : [ 
        {
        
            name: "John",
            phone: "1234567890",
            email: "john.doe@example.com"   

        },
        {
        
            name: "Piter",
            phone: "06656565665",
            email: "peter.parker@example.com"   

        },
        {
        
            name: "andrew",
            phone: "1234567890",
            email: "andrew.smith@example.com"   

        },
    ],
}

while (true) {
    const input = prompt("add or search contact? (add/search/exit)");
    if (input === null || input.toLowerCase() === "exit" || !input) {
        break;
    }

    if (input.toLowerCase() === "add") {
        const user = prompt("Enter contact name: name/phone/email");
        const separ = user.split("/");

        const newUser = {
            name : separ[0],
            phone : separ[1],
            email : separ[2] 
        };
        book.contacts.push(newUser);
            console.log(
            Object.values(book.contacts)
            );
    }
    if (input.toLowerCase() === "search"){
        alert("searching contact ......");
        const search = prompt("Enter contact name to search: name or phone or email");

        let found = false;
        for (let i = 0 ; i < book.contacts.length; i++) {
            if (book.contacts[i].name === search || book.contacts[i].phone === search || book.contacts[i].email === search) {
                alert(`Contact found: ${book.contacts[i].name}, ${book.contacts[i].phone}, ${book.contacts[i].email}`);
                found = true;
                break;
            }
        }
        if (!found) {
            alert("Contact not found");
        }
        console.log(search);
        }
        
}




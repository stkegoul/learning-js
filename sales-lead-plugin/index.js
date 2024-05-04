// MAIN

let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))

        render(myLeads)
    })
})

function render(leads) {

    listItems = ""

    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href = 'https://${leads[i]}' target='_blank'>
                    https://${leads[i]}
                </a>
            </li>
        `
        // console.log(listItems)
    }

    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function() {
    console.log("Please double click, instead!")
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    inputEl.value = ""
})

// MAIN END

// LOCAL STORAGE


// const addStorage = document.getElementById("add-storage")
// addStorage.addEventListener("click", function() {
//     localStorage.setItem("myLeads", "www.google.com/yes-me-ooo")
//     console.log(localStorage.getItem("myLeads"))
// })

// const clearStorage = document.getElementById("clear-storage")
// clearStorage.addEventListener("click", function() {
//     localStorage.clear()
// })

// EXERCISE

// const recipient = "James"
// const sender = "Praise Philemon"

// const email = `
//     Hey ${recipient}! 
//     How's it going? 
//     Cheers, ${sender}!
// `

// console.log(email)
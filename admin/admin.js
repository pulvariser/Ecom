const onTap = (element)=>{
    // Hide all tabs data
    const tabData = document.getElementsByClassName("tab-data")
    for(let el of tabData)
    {
        el.style.display = "none"
    }

    // then show only active tab data
    const tabContent = document.getElementById(element)
    tabContent.style.display = "block"
}
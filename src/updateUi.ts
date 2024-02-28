import { jobInfo } from "./interfaces"

const uiList = document.querySelector('#job-list')  as HTMLUListElement
const template = document.querySelector('template') as HTMLTemplateElement
 
export function updateUI(dataArr:[]) {
   dataArr.forEach((item: jobInfo)=>{
    // console.log(item);
    const clone = template.content.cloneNode(true) as HTMLTemplateElement
    const companyLogo = clone.querySelector('#company-logo') as HTMLImageElement
    companyLogo.src = item.logo
    const companyTitle = clone.querySelector('#company-title') as HTMLParagraphElement
    companyTitle.textContent = item.company
    const jobTitle = clone.querySelector('#job-title') as HTMLHeadElement
    jobTitle.textContent = item.position
    const postedAt = clone.querySelector('#postedAt')  as HTMLParagraphElement
    postedAt.textContent = item.postedAt
    const location = clone.querySelector('#location') as HTMLParagraphElement
    location.textContent = item.location

    const jobNewState = clone.querySelector("#job-new-state") as HTMLParagraphElement
    jobNewState.style.display = `${!item.featured ? "block":  "none"}`

    const 

    const filters = clone.querySelector("#filters") as HTMLDivElement
    uiList.appendChild(clone)
    
   })
}
import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'


const App = () => {

  const jobOpenings = [
  {
    brandlogo: "https://logo.clearbit.com/google.com",
    nameofCompany: "Google",
    dataPosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    loctation: "Bengaluru, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/amazon.com",
    nameofCompany: "Amazon",
    dataPosted: "5 days ago",
    post: "Software Development Engineer I",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    loctation: "Bengaluru, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/microsoft.com",
    nameofCompany: "Microsoft",
    dataPosted: "1 day ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hour",
    loctation: "Hyderabad, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/meta.com",
    nameofCompany: "Meta",
    dataPosted: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hour",
    loctation: "Bengaluru, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/apple.com",
    nameofCompany: "Apple",
    dataPosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    loctation: "Hyderabad, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/nvidia.com",
    nameofCompany: "NVIDIA",
    dataPosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    loctation: "Pune, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/netflix.com",
    nameofCompany: "Netflix",
    dataPosted: "7 days ago",
    post: "Senior Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    loctation: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/salesforce.com",
    nameofCompany: "Salesforce",
    dataPosted: "2 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$43/hour",
    loctation: "Hyderabad, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/adobe.com",
    nameofCompany: "Adobe",
    dataPosted: "5 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    loctation: "Noida, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/intel.com",
    nameofCompany: "Intel",
    dataPosted: "3 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    loctation: "Bengaluru, India"
  }
];
  return (
    <div className='parent'>
     
      {jobOpenings.map(function(elem,idx){
       
        
        return  <div key ={idx}>
          <Card company={elem.nameofCompany} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} brandlogo={elem.brandlogo} pay={elem.pay} dataPosted={elem.dataPosted}/>
        </div>
      })}
       
    </div>
  )
}

export default App

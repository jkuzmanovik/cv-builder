'use client'
import { useEffect, useState } from "react";



const RenderCV = () => {
    const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Replace this with your API endpoint to fetch the HTML page
    fetch('https://y3venvn9v6.execute-api.us-east-1.amazonaws.com/dev/get-user/1234')
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // This is where you can do something with the HTML content
    console.log(htmlContent);
  }, [htmlContent]);




  return (
    <>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  )
}

export default RenderCV
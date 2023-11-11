
function Contact() {
  return (
    <div class="parent">
      <div class="picture">

        <img src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" alt="Desiree" class="img"/>
        <p class="reference">
        Photo by <a href="https://unsplash.com/@markuswinkler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="black" target="_blank" rel="noreferrer">Markus Winkler</a> 
        on <a href="https://unsplash.com/photos/text-q3QPw37J6Xs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="black" target="_blank" rel="noreferrer">Unsplash</a></p>
      </div>
      
      <div class="text">
      <h1>Contact</h1>
      <div class="form">
        <form action="" id="contact">
          
          <p><input type="text" placeholder="Name"/></p>
          <p><input type="email" placeholder="email"/></p>
          <p><input type="phone" placeholder="Phone number"/></p>
          <p><input type="submit" value="Save"/>
        </p></form>
        </div>
        <div class="text">
        <p>I am excited about the opportunity to join your team, <br/>
        and I would be happy to discuss how I can help the company with my skills and experience. </p>
          <p>Thank you for considering my profile. I look forward to hearing from you soon.</p>
        </div>
        
      
        
          
      </div>
    </div>
  )
}

export default Contact
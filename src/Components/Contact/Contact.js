import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <div className="box">
            <h5>Please feel free to contact with me.</h5>
            <h5>You can visit my facebook page or LinkedIn account and message me there.</h5>
            <h6>Facebook Page - <a href='/'>Zisanur Haque</a></h6>
            <h6>LinkedIn Account - <a href='/'>Zisanur Haque</a></h6>
        </div>
        <div className='box'>
            <form>
              <h5>Send A Message</h5>
                <input type="text" placeholder="Type Your Name"/>
                <input type="email" placeholder="Type Your Email"/>
                <input type="text" placeholder="Subject"/>
                <textarea type="text" placeholder="Type here..."/>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact

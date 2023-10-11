import './certificate.css';

import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

export default function Certificate() {

  return (
    <div className="background">
      <div className='page__Content py-5 mt-5 container justify-content-center'>
        <SlideshowLightbox className="certificate__ImgList d-md-flex p-5">
          <img className='certificate__Img col-md-4' data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-duration = "350" src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/380702357_862185942148444_248700768027644971_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=BpznCg-OFeIAX9RlTl2&_nc_ht=scontent.fsgn5-5.fna&oh=03_AdSCOBSqDuInvX-fbBzX2db9Jp3k_4ff-iBfZ_BggrnufQ&oe=6545FB72" />
          <img className='certificate__Img col-md-4' data-aos="fade-down" data-aos-anchor-placement="top-center" data-aos-duration = "350" src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/380269589_2603413526485659_8478175743804246656_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DHJWHqWq2IAAX-IAXpA&_nc_ht=scontent.fsgn5-15.fna&oh=03_AdT0cXUlbh7w6wAs-5DzlhtvscAfke9lEpGK24WqXDdUEA&oe=6545E591" />
          <img className='certificate__Img col-md-4' data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-duration = "350" src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/380462371_1020571849066891_6886379168847005389_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=msOElJmEmYMAX_zIFCc&_nc_ht=scontent.fsgn5-14.fna&oh=03_AdSD_faLzPyWK-a-NiA3MQpSRqaO3rmJz_XOZ0fYQ2kLLQ&oe=6545EE87" />
        </SlideshowLightbox>
        <div data-aos="fade-down" data-aos-anchor-placement="center"  className='d-md-flex d-none justify-content-around mt-5'>
          <h1>College</h1>
          <h1>CyberSoft Front-End Certificate</h1>
          <h1>TOEIC</h1>
        </div>
      </div>
    </div>
  )
}

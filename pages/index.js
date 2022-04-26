import * as React from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import lucas from '../public/lucas.png';
import Image from 'next/image'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Home() {
	return (
		<div>
			<Grid container>
        <Grid item xs={8}>
          <div className="description">
            <div  className="title-box">
              <div className="title">Lucas Coutinho</div>
            </div>
            <div className="area-box">
            <a className="area"> FrontEnd and BlockChain <br/> Developer</a>
            </div>
            <div  className="who-box">
              <div className="who">About Me:</div>
            </div>
                <div className="about-box">
                  <a className="about"> Hey, My name is Lucas Coutinho, im currently based on Brasil and my main goal as a developer is help to change the world.</a>
                </div>
                <div  className="work-box">
                  <div className="who">My mission:</div>
                  <a className="about">Currently Im working with Solid World Dao to stop the climate change. In my free time i give consultancy for devs that are starting and did not have conditions to go to a university or do a bootcamp and this is my great passion</a>
                </div>
                <div className="contact-box">
                  <div className="who"> Contact: </div>
                  <Link href='https://twitter.com/home'><TwitterIcon/></Link>
                  <Link href='https://www.linkedin.com/in/lucasdcoutinho/'><LinkedInIcon/></Link>
                  <Link href='https://www.instagram.com/lucas.dcoutinho/'><InstagramIcon/></Link>
                  <Link href='https://github.com/lucasdcoutinh0'><GitHubIcon/></Link>
                </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="photo">
          <div className="picture-box">
            <Image className='picture' width='350px' height='350px' src={lucas}/>
            <div className="projects">Check my projects and works in GitHub</div>
            <div className="projects">Lets be Frieds :)</div>
          </div>
          </div>
        </Grid>
      </Grid>
		</div>
	);
}

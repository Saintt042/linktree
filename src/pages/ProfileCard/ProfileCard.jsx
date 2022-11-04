import React from 'react';
import Button from '../../component/Button';
import ProfileImage from '../../resources/DisplayPhoto.jpeg';
import { MyCard } from '../ProfileCard/ProfileCardStyle';
import slack from '../../resources/slack.png';
import github from '../../resources/Icon.png';
import share from '../../resources/share.png';
import shareMobile from '../../resources/shareMobile.png';
import {NavLink} from 'react-router-dom';
import { MyButton } from '../../component/ButtonStyle';
// import Footer from '../../component/layout/Footer';

const ProfileCard = () => {
	return (
		<MyCard>
			<div className='shareIcon'>
				<img src={share} className='share' alt='share' />
				<img src={shareMobile} className='shareMobile' alt='shareMobile' />
			</div>
			<div className='round'>
				<img src={ProfileImage} alt='Display' id='profile__img' />
			</div>
			<h3>Alinwachukwu Michael</h3>
			<h3 id='slack' style={{ display: 'none' }}>
				saintt042
			</h3>

			{/* Buttons Links */}
			<div className='myLinks'>
				<Button
					text={'Twitter'}
					btnId={'twitter'}
					btnLink={'https://twitter.com/SaintMichaell'}
				/>
				<Button
					text={'Zuri Team'}
					btnId={'btn__zuri'}
					btnLink={'https://training.zuri.team'}
				/>
				<Button
					text={'Zuri Books'}
					btnId={'books'}
					btnLink={'http://books.zuri.team'}
				/>
				<Button
					text={'Python Books'}
					btnId={'book__python'}
					btnLink={
						'https://books.zuri.team/python-for-beginners?ref_id=<saintt042>'
					}
				/>
				<Button
					text={'Background Check for Coders'}
					btnId={'pitch'}
					btnLink={'https://backgroundcheck.zuri.team'}
				/>
				<Button
					text={'Design Books'}
					btnId={'book__design'}
					btnLink={'https://books.zuri.team/design-rules'}
				/>
				<NavLink to='/Contact'>
				<MyButton> Contact Me </MyButton>
				</NavLink>
			</div>
			<div className='socials'>
				<img src={slack} alt='slack' style={{ marginRight: '1.5rem' }} />
				<img src={github} alt='github' />
			</div>
			{/* <Footer /> */}
		</MyCard>
	);
};

export default ProfileCard;
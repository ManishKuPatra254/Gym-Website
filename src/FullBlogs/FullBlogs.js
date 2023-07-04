import { Fragment } from 'react';
import style from './FullBlogs.module.css';
import { TextField } from '@mui/material';

export function FullBlogs() {
    return (
        <Fragment>
            <div className={style.heading4}>
                <h4>Blogs of Power Fitness</h4>
            </div>

            <div className={style.main_blogs}>
                <TextField label="Search articles" variant="standard" type='text'
                    sx={{ width: '50%', margin: 'auto', display: 'flex', justifyContent: 'center', }} />
                <div className={style.sub_mini_blogs}>
                    <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className={style.text_aree}>
                        <h4>5 More Strength Exercises For Beginners</h4>
                        <p>If you’re just starting out with strength training, it’s likely you won’t have any equipment at home. It’s a good idea to start with bodyweight only anyway as adding too much weight, too soon, will increase your risk of injury.

                            When you’re ready to add some weight, you can just use whatever you have available – household items like books, bottles of water, laundry detergent or cans of food work well too. </p>
                    </div>
                </div>



                <div className={style.sub_mini_blogs}>
                    <div className={style.text_aree}>
                        <h4>What To Wear For Strength Training</h4>
                        <p>When it comes to what to wear when strength training, the same pretty much applies as for equipment – you can use whatever you have available to start with.

                            However, there are benefits to wearing training specific kit, such as keeping you cool, comfortable, dry and making you feel good!

                            The outfit I’m wearing in these images was gifted from adidas including the Dropset trainers that I’m really enjoying for strength training and gym workouts. For guys, your options are similar – adidas has a great selection of mens tracksuits and other kit, check out their site for inspiration.  </p>
                    </div>
                    <img src="https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>



                <div className={style.sub_mini_blogs}>
                    <img src="https://images.pexels.com/photos/13104546/pexels-photo-13104546.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <div className={style.text_aree}>
                        <h4>Farmers Walks</h4>
                        <p>Start with light weights (e.g 2x shopping bags filled with a 2kg bag of rice/beans in each or 2x dumbbells/kettlebells)

                            Farmers walks are a full-body exercise that primarily target the core, back, legs, and grip strength.

                            Stand up straight with one weight in each hand, held by your sides. From your starting point, take small steps forward. Maintain a strong grip until you reach your end point.

                            Then place your weights down on the floor. To repeat, turn around and pick up the weights again. Return in the opposite direction.  </p>
                    </div>
                </div>


            </div>
        </Fragment>
    )
}

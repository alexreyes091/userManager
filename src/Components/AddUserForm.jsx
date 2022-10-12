import { useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

import twitter from '../assets/img/twitter-1.png';
import linkedin from '../assets/img/linkedin-1.png';
import siteWeb from '../assets/img/siteweb-1.png';

// Components
import { ChooseImg } from './ChooseImg';

// Helpers
import {getValidateShemaForm} from '../helpers/getValidateShemaForm';


export const AddUserForm = () => {

    const [img, setImg] = useState('');

    return (
        <Formik
            initialValues= {{
                userName: '',
                firstName: '',
                lastName: '',
                email: '',
                workGroup: '',
                location: '',
                date: '',
                img: '',
                twitter: '',
                linkedin: '',
                siteWeb: '',
            }}
            validationSchema = {getValidateShemaForm}
            enableReinitialize = {true}

            onSubmit = { (values, {resetForm}) => {
                values.img=(img);
                resetForm();
                console.log(values);
                console.log({
                    fileName: values.file.name,
                    type: values.file.type,
                    size: `$ bytes`
                })
            }}
        >
            <Form >
                <div className='flex flex-col md:flex-row gap-10 my-5 '>
                    <div className='flex-col shadow-lg md:w-4/12 lg:w-3/12 h-min rounded-b-lg'>
                        <h3 className='bg-bgGray p-5 rounded-t-lg font-bold text-bgPrimary text-lg'>Profile Picture</h3>
                        <div className='flex flex-col bg-white p-5 rounded-b-lg'>

                            <img className='rounded-full mx-auto' src={img} alt="imagen de perfil" width="200" height="200" />
                            <p className='text-xl p-3 my-3 mx-auto text-center'>Choose an Image</p>
                            <ChooseImg setImg={setImg}/>
                            {/* <input className='p-3 my-5 rounded-md bg-bgPrimary hover:bg-bgSecondary duration-300 text-bgWhite text-lg font-bold' type="file" name="file" id='file'/> */}
                            {/* <input
                                className='p-3 my-5 rounded-md bg-bgPrimary hover:bg-bgSecondary duration-300 text-bgWhite text-lg font-bold'
                                id="file" name="file" type="file" onChange={(event) => {
                                setFieldValue("file", event.currentTarget.files[0]);
                            }} /> */}
                            {/* Data image user */}

                            <div >
                                <div className='flex flex-row gap-5 mt-8 items-center'>
                                    <label htmlFor="twitter">
                                        <img src={twitter} alt="red social twiter" width="30" height="30"/>
                                    </label>
                                    <Field
                                        className="bg-bgWhite p-3 rounded-lg shadow-sm w-full"
                                        placeholder="https://example.com"
                                        name="twitter"
                                        type="text"
                                    />
                                </div>
                                <span className='ml-12 text-red-500 italic mb-3'><ErrorMessage name="twitter" /></span>
                            </div>
                            {/* Web Twitter */}

                            <div>
                                <div className='flex flex-row gap-5 mt-2 items-center'>
                                    <label htmlFor="linkedin">
                                        <img src={linkedin} alt="red social linkedin" width="30" height="30"/>
                                    </label>
                                    <Field
                                        className="bg-bgWhite p-3 rounded-lg shadow-sm w-full"
                                        placeholder="https://example.com"
                                        name="linkedin"
                                        type="text"
                                    />
                                </div>
                                <span className='ml-12 text-red-500 italic mb-3'><ErrorMessage name="linkedin" /></span>
                            </div>
                            {/* Web Linkedin */}

                            <div>
                                <div className='flex flex-row gap-5 mt-2 items-center'>
                                    <label htmlFor="siteWeb">
                                        <img src={siteWeb} alt="sitio web personal" width="30" height="30"/>
                                    </label>
                                    <Field
                                        className="bg-bgWhite p-3 rounded-lg shadow-sm w-full"
                                        placeholder="https://example.com"
                                        name="siteWeb"
                                        type="text"
                                    />
                                </div>
                                <span className='ml-12 text-red-500 italic mb-3'><ErrorMessage name="siteWeb" /></span>
                            </div>
                            {/* Web SiteWeb */}
                        </div>
                    </div>
                    <div className='flex-col shadow-lg md:w-8/12 lg:w-9/12 h-min rounded-b-lg'>
                        <h3 className='bg-bgGray p-5 rounded-t-lg font-bold text-bgPrimary text-lg'>Account Details</h3>
                        <div className='flex flex-col bg-white p-5 md:p-10'>

                            <div className='flex flex-col'>
                                <label className='mx-1 pb-2' htmlFor="userName" >Username:</label>
                                <Field className="p-3 rounded-lg shadow-sm bg-bgWhite" placeholder='How your name will appear to other users on the site' name="userName" type="text"/>
                                <span className='text-red-500 italic mb-3'><ErrorMessage name="userName" /></span>
                            </div>
                            {/* Username */}

                            <div className='flex gap-5 flex-col md:flex-row'>
                                <div className='flex flex-col md:w-1/2'>
                                    <label className='mx-1 pb-2' htmlFor="firstName" >First Name:</label>
                                    <Field className="p-3 rounded-lg shadow-sm bg-bgWhite" placeholder='Frist Name' name="firstName" type="text"/>
                                    <span className='text-red-500 italic mb-3'><ErrorMessage name="firstName" /></span>
                                </div>
                                {/* First Name */}
                                <div className='flex flex-col md:w-1/2'>
                                    <label className='mx-1 pb-2' htmlFor="lastName">Last Name:</label>
                                    <Field className="p-3 rounded-lg shadow-sm bg-bgWhite" placeholder='Last Name' name="lastName" type="text" />
                                    <span className='text-red-500 italic mb-3'><ErrorMessage name="lastName" /></span>
                                </div>
                                {/* Last Name */}
                            </div>

                            <div className='flex flex-col'>
                                <label className='mx-1 pb-2' htmlFor="email">Email:</label>
                                <Field className="p-3 rounded-lg shadow-sm bg-bgWhite" placeholder='example@email.com' id="email" name="email" type="email" />
                                <span className='text-red-500 italic mb-3'><ErrorMessage name="email" /></span>
                            </div>
                            {/* Email */}

                            <div className='flex gap-2 flex-col md:flex-row'>
                                <div className='flex flex-col md:w-1/3'>
                                    <label className='mx-1 pb-2' htmlFor="workGroup" >Work Group:</label>
                                    <Field className="p-3 rounded-lg shadow-sm bg-bgWhite"
                                            placeholder='Choose Work Group'
                                            name="workGroup"
                                            type="text"
                                            as='select'>
                                        <option value="selected">** Choose Work Group **</option>
                                        <option value="accounting">Accounting</option>
                                        <option value="support">Support IT</option>
                                        <option value="developer">Developer</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="customer">Customer service</option>
                                    </Field>
                                    <span className='text-red-500 italic mb-3'><ErrorMessage name="workGroup" /></span>
                                </div>
                                {/* Work Group */}
                                <div className='flex flex-col md:w-1/3'>
                                    <label className='mx-1 pb-2' htmlFor="location">Location:</label>
                                    <Field className="p-3 rounded-lg shadow-sm bg-bgWhite" placeholder='Location' name="location" type="text" />
                                    <span className='text-red-500 italic mb-3'><ErrorMessage name="location" /></span>
                                </div>
                                {/* Location */}
                                <div className='flex flex-col md:w-1/3'>
                                    <label className='mx-1 pb-2' htmlFor="date">Date of Birth:</label>
                                    <Field className="p-3 rounded-lg shadow-sm bg-bgWhite" placeholder='Date of Birth' name="date" type="date" />
                                    <span className='text-red-500 italic mb-3'><ErrorMessage name="date" /></span>
                                </div>
                                {/* Date of Birth */}
                            </div>

                        </div>
                        <div className='flex justify-end'>
                            <button className='px-10 py-3 m-5 rounded-md bg-bgPrimary
                                                hover:bg-bgSecondary duration-300 text-bgWhite
                                                text-lg font-bold'
                                    type='submit'
                            > Save</button>
                        </div>
                    </div>
                </div>



            </Form>
        </Formik>
    );
}

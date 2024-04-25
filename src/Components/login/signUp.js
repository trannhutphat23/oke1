import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import './login.css';
import { AppContext } from '../../Context/AppContext';

const validationSchema = Yup.object({
    phone: Yup.string().required('Please enter phone number!')
        .matches(/^[\+|0]([0-9]{9,14})\b/, 'Phone number is not correct!'),
    password: Yup.string().required('Please enter password!'),
    name: Yup.string().required('Please enter name!'),
    address: Yup.string().required('Please enter address!'),
    confirmPassword: Yup.string()
        .required('Please enter confirm password!')
        .oneOf([Yup.ref('password'), null], 'Confirm password incorrect!')
});

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [validateOnChange, setValidateOnChange] = useState(false);
    const navigate = useNavigate()
    const { setCustomer } = useContext(AppContext)
    const form = useFormik({
        initialValues: {
            phone: '',
            name: '',
            address: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: handleFormsubmit,
        validateOnBlur: false,
        validateOnChange: validateOnChange,
    })

    function handleFormsubmit(values) {
        setLoading(true);
        fetch('https://restapi.blueribbon.name.vn/api/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((resJson) => {
                if (resJson.success) {
                    toast.success('Signup successfully')
                    setCustomer(resJson.customer)
                    navigate('/');
                } else {
                    toast.error("Signup failed")
                }
            })
            .catch(() => {
                toast.error("Signup failed")
            })
            .finally(() => {
                setLoading(false);
            });
    }
    return (
        <form
            className="login-container"
            onSubmit={(e) => {
                setValidateOnChange(true);
                form.handleSubmit(e);
            }}
        >
            <h1>SIGN UP</h1>
            <div className="input-container">
                <div className="input-box">
                    <div className='box'>
                        <p>Phone number:</p>
                        <input type="text"
                            className={clsx({
                                'invalid': form.errors.phone
                            })}
                            placeholder="Email or Phone number"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.phone}
                            name='phone' />
                    </div>
                    <span
                        className={clsx('error-message', {
                            'show': form.errors.phone,
                        })}
                    >
                        {form.errors.phone || ''}
                    </span>
                </div>
                <div className="input-box">
                    <div className='box'>
                        <p>Name:</p>
                        <input type="text"
                            className={clsx({
                                'invalid': form.errors.name
                            })}
                            placeholder="Name"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.name}
                            name='name' />
                    </div>
                    <span
                        className={clsx('error-message', {
                            'show': form.errors.name,

                        })}
                    >
                        {form.errors.name || ''}
                    </span>
                </div>
                <div className="input-box">
                    <div className='box'>
                        <p>Address:</p>
                        <input type="text"
                            className={clsx({
                                'invalid': form.errors.address
                            })}
                            placeholder="Address"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.address}
                            name='address' />
                    </div>
                    <span
                        className={clsx('error-message', {
                            'show': form.errors.address,

                        })}
                    >
                        {form.errors.address || ''}
                    </span>
                </div>
                <div className="input-box">
                    <div className='box'>
                        <p>Password:</p>
                        <input type="password"
                            className={clsx({
                                'invalid': form.errors.password
                            })}
                            placeholder="Password"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.password}
                            name='password' />
                    </div>
                    <span
                        className={clsx('error-message', {
                            'show': form.errors.password,

                        })}
                    >
                        {form.errors.password || ''}
                    </span>
                </div>
                <div className="input-box">
                    <div className='box'>
                        <p>Confirm password:</p>
                        <input type="password"
                            className={clsx({
                                'invalid': form.errors.confirmPassword
                            })}
                            placeholder="Confirm password"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.confirmPassword}
                            name='confirmPassword' />
                    </div>
                    <span
                        className={clsx('error-message', {
                            'show': form.errors.confirmPassword,

                        })}
                    >
                        {form.errors.confirmPassword || ''}
                    </span>
                </div>
            </div>
            <button type='submit' className={clsx("submit-button", {
                'disabled': loading
            })} >
                <p>SIGN UP</p>
            </button>
        </form>
    );
};

export default SignUp;

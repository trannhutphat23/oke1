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
});

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [validateOnChange, setValidateOnChange] = useState(false);
    const navigate = useNavigate()
    const { setCustomer } = useContext(AppContext)
    const form = useFormik({
        initialValues: {
            phone: '',
            password: '',
        },
        validationSchema,
        onSubmit: handleFormsubmit,
        validateOnBlur: false,
        validateOnChange: validateOnChange,
    })

    function handleFormsubmit(values) {
        setLoading(true);
        fetch('https://restapi.blueribbon.name.vn/api/customer/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((resJson) => {
                if (resJson.success) {
                    toast.success('Login successed')
                    setCustomer(resJson.customer)
                    navigate('/');
                } else {
                    toast.error("Login successed")
                }
            })
            .catch(() => {
                toast.error("Login failed")
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
            <h1>SIGN IN</h1>
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
                            'show': form.errors.username,
                        })}
                    >
                        {form.errors.phone || ''}
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
            </div>
            <button type='submit' className={clsx("submit-button", {
                'disabled': loading
            })} >
                <p>SIGN IN</p>
            </button>
        </form>
    );
};

export default SignIn;

import { faEnvelope, faIdCard } from '@fortawesome/free-regular-svg-icons';
import { faClose, faUser, faUserLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, Form } from 'react-router-dom';
import Button from '../homeComponent/Button';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons/faPhoneFlip';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRole, setShowModal, setSign } from '../../stores/HomeSlice';
import api from '../../../axios/api';
import { toast } from 'react-toastify';

function Signin() {
  const { sign } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  function onCloseModal() {
    dispatch(setShowModal());
  }

  function onHandleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = Object.fromEntries(formData.entries());

    console.log('respone', response);
  }
  const containerClose = useRef(null);
  useEffect(() => {
    function handleWindowClose(event) {
      if (!event) return;
      if (
        containerClose.current &&
        containerClose.current?.contains(event.target)
      ) {
        onCloseModal();
      }
    }

    window.addEventListener('mousedown', handleWindowClose);

    return () => {
      window.removeEventListener('mousedown', handleWindowClose);
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center  fixed top-0 left-0 right-0 bottom-0 z-40">
      <div
        className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-40  "
        ref={containerClose}
      ></div>
      <div className="bg-white shadow-md flex flex-col items-start justify-center w-9/10 rounded-md z-50 overflow-y-auto no-scrollbar scroll-smooth gap-y-5">
        <div className="flex items-center justify-between w-full ">
          <SignType title="Sign in" />
          <SignType title="Sign up" />
          {/* <NavLink className="uppercase tracking-wide font-semibold text-gray-800 w-1/2 text-center text-[.8rem] cursor-pointer">
            Sign up
          </NavLink> */}
        </div>
        <Form
          method="post"
          // onSubmit={onHandleFormSubmit}
          className="flex flex-col gap-y-2 w-[85%] px-6 mx-auto pb-8 "
        >
          <div className="flex flex-col items-center justify-center w-full gap-y-1">
            <h3 className="font-semibold tracking-tight text-[1.5rem]">
              Welcome to QuickDine
            </h3>
            <p className="font-semibold text-black/80 text-[.7rem]">
              Access your exclusive reservations and curated dining profile
            </p>
          </div>
          <FormInput>
            {sign === 'Sign in' ? (
              <>
                <Input
                  title="email address"
                  icon={faEnvelope}
                  placeholder="you@example.com"
                  name="email"
                />
                <Input
                  title="password"
                  icon={faUserLock}
                  placeholder="..........."
                  type="password"
                  name="password"
                />
              </>
            ) : (
              <>
                <Input
                  title="full name"
                  icon={faUser}
                  placeholder="Sarah Jenkins"
                  name="fullName"
                />
                <Input
                  title="email address"
                  icon={faUserLock}
                  placeholder="you@example.com"
                  type="email"
                  name="email"
                />
                <Input
                  title="ghana card number"
                  icon={faIdCard}
                  placeholder="GHA-123456789-1"
                  type="text"
                  name="ghanaCard"
                />
                <Input
                  title="phone number (optional)"
                  icon={faPhoneFlip}
                  placeholder="+(555) 000-0000"
                  type="tel"
                  name="phoneNumber"
                />
                <Input
                  title="password"
                  icon={faUserLock}
                  placeholder="..........."
                  type="password"
                  name="password"
                />
                <SelectManager name="role" />
              </>
            )}
            {/* */}
          </FormInput>
          <div className="w-full flex flex-col gap-4">
            <Button
              title="login"
              style="bg-black text-white h-10"
              type="submit"
            />
            <p className="text-[.6rem] text-center font-semibold text-black/90 tracking-wide">
              By signing in, you agree to our{' '}
              <Link className="underline cursor-pointer ">
                Terms of Service
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

function SignType({ title }) {
  const { sign } = useSelector((state) => state.home);
  // const [isSign, setIsSign] = useState(false);
  const dispatch = useDispatch();
  function onCloseModal() {
    dispatch(setShowModal());
  }

  function handleSign() {
    dispatch(setSign({ title }));
  }
  return (
    <NavLink
      className={`uppercase tracking-wide font-semibold  py-4 ${sign === title ? 'border-b-2 border-b-black/70  text-gray-800' : 'bg-black/5 text-gray-800/50'} px-8 w-1/2 text-center  text-[.8rem] cursor-pointer relative `}
      onClick={handleSign}
    >
      {title}
      {title === 'Sign up' && (
        <FontAwesomeIcon
          icon={faClose}
          className="absolute right-4 top-2  text-[1rem]"
          onClick={onCloseModal}
        />
      )}
    </NavLink>
  );
}

function SelectManager({ name }) {
  const dispatch = useDispatch();

  function handleRole(event) {
    dispatch(setRole(event.target.checked));
  }
  return (
    <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="manager"
        className="accent-black cursor-pointer "
        name={name}
        onClick={handleRole}
      />
      <label
        htmlFor="manager"
        className="text-[.6rem] text-black tracking-wide font-semibold cursor-pointer"
      >
        I am a Restaurant Owner / Manager
      </label>
    </div>
  );
}

function FormInput({ children }) {
  return (
    <div className="flex flex-col w-full gap-4 mb-2 mt-3 ">{children}</div>
  );
}
function Input({ title, icon, placeholder, type = '', name }) {
  return (
    <div className="flex flex-col items-start gap-y-1">
      <label
        htmlFor="email"
        className="uppercase text-black/80 text-[.6rem] font-semibold tracking-wide"
      >
        {title}
      </label>
      <div className="w-full flex gap-5 items-center  h-6 border-b-[.1rem] border-b-black/30 px-2 ">
        <FontAwesomeIcon icon={icon} className="text-black/80 text-[.8rem]" />
        <input
          type={type || 'text'}
          className=" text-black/80 outline-none w-full h-full tracking-wide text-[.7rem] font-semibold"
          placeholder={placeholder}
          name={name}
        />
      </div>
    </div>
  );
}

export async function action({ request, params }) {
  const response = await request.formData();

  const formInputs = Object.fromEntries(response.entries());

  try {
    const { data } = await api.post('/users', formInputs);

    toast.success('user successfully created');
    return data;
  } catch (error) {
    console.log(error, error?.response.data);
    toast.error(error?.response?.data?.message || 'Something went wrong');
    console.log(error);
    console.error(error);
  }
}

export default Signin;

import Image from 'next/image';
import Input from '@/app/(shared)/Input/Input';

export default async function LoginForm() {
  return (
    <form className="loginForm">
      <Image
        src={'/logo.svg'}
        alt="logo"
        width={100}
        height={100}
        className="loginForm__logo"
      />
      <Input name="username" placeholder="" label="Username" />
      <Input
        name="password"
        placeholder=""
        label="Password"
        isPassword={true}
      />
      <button className="btn btn-orange loginForm__btn">Login</button>
    </form>
  );
}

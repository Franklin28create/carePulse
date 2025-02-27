import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const [user, patient] = await Promise.all([
    getUser(userId),
    getPatient(userId),
  ]);

  if (patient) {
    return (
      <div className="h-screen max-h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center text-white gap-y-5 px-12 h-full p-12 rounded-md border border-blue-300">
          <h1 className="text-center">
            Hey <span className="text-blue-500">{user?.name}</span>!
          </h1>

          <div className="object-fit flex flex-col space-y-5 items-center">
          <h1 className="text-center">
            You have already been registered as a Patient! Please Proceed to
            creating an appointment with our especialists by clicking{" "}
            <Link
              href={`/patients/${user?.$id}/new-appointment`}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              here
            </Link>
          </h1>
            <img
              src="/assets/images/dr-cameron.png"
              alt="Dr. Cameron"
              className="size-12"
            />
            <p className="md:text-2xl">- Dr. Cameron</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
            <Image
              src="/assets/icons/logo-full.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="mb-12 h-10 w-fit"
            />
  
            <RegisterForm user={user!} />
  
            <p className="copyright py-12">&copy; 2025 CarePulse By Frank</p>
          </div>
        </section>
  
        <Image
          src="/assets/images/register-img.png"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[390px]"
        />
      </div>
    );
  }

};

export default Register;

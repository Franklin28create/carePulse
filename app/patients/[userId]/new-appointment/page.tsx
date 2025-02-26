import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification | PasskeyModal */}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between max-h-screen">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            patientId={patient?.$id as string}
            userId={userId}
            type="create"
          />

          <p className="copyright mt-10">
            &copy; 2025 CarePulse By Frank
          </p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}

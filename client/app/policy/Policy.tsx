import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
      <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
      <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
      Welcome to UniKendra. By accessing or using our services, you agree to be bound by these Terms and Conditions.If you do not agree with any part of these terms, you must not use our platform.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Platform refers to the UniKendra website and services. User refers to any individual or entity using the platform, including  students, and administrators.Content refers to all materials, including text, images, videos, and other educational resources provided on the platform.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Users must create an account to access certain features.Users are responsible for maintaining the confidentiality of their account information.Users must provide accurate and complete information when creating an account.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Users agree to use the platform only for lawful educational purposes.Users must not use the platform to post or transmit any harmful, obscene, or otherwise objectionable content.Users are prohibited from interfering with the operation of the platform.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        UniKendra is committed to protecting users privacy. Please review our Privacy Policy for more details.Users agree to the collection and use of their information as described in the Privacy Policy.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Some features or content on the platform may require payment.All payments are processed securely. Users must provide accurate billing information.Refunds are only issued in accordance with our Refund Policy.
        </p>
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        UniKendra reserves the right to suspend or terminate a users account for violations of these terms.Users may terminate their accounts at any time by contacting customer support.
        </p>
        <br />
      </ul>
      </div>
    </div>
  );
};

export default Policy;

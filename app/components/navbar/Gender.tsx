import { FaMale, FaFemale } from "react-icons/fa";
import GenderBox from "../GenderBox";
import { useSearchParams, usePathname } from "next/navigation";
import Container from "../Container";
import GenderInput from "../input/GenderInput";

export const genderOptions = [
  {
    label: "Male",
    icon: FaMale,
    description: "Male Bodin",
  },
  {
    label: "Female",
    icon: FaFemale,
    description: "Female Bodin",
  },
];

const Gender = () => {
  const params = useSearchParams();
  const genderParam = params?.get("gender");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {genderOptions.map((item) => (
          <GenderBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={genderParam === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Gender;

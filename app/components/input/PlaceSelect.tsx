"use client";

import Select from "react-select";

import usePlace from "@/app/hooks/usePlace";

export type PlaceSelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface PlaceSelectProps {
  value?: PlaceSelectValue;
  onChange: (value: PlaceSelectValue) => void;
}

const PlaceSelect: React.FC<PlaceSelectProps> = ({ value, onChange }) => {
  const { getAll } = usePlace();

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as PlaceSelectValue)}
        formatOptionLabel={(option: any) => (
          <div
            className="
          flex flex-row items-center gap-3"
          >
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default PlaceSelect;

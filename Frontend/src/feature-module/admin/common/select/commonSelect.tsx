import React from "react";
import { Select } from "antd";

const { Option } = Select;

export interface OptionType {
    label: string;
    value: string | number;
}

interface CustomDropdownProps {
    options: OptionType[];
    defaultValue?: OptionType; // Change to expect an object
    className?: string;
    placeholder?: string;
    modal?: boolean;
    value?: any;
    onChange?: (value: any, option?: any) => void;
    disabled?: boolean;
}

const CustomSelect: React.FC<CustomDropdownProps> = ({
    options,
    defaultValue,
    className,
    placeholder,
    modal,
    value,
    onChange,
    disabled,
}) => {
    // Determine the popup container based on the `modal` prop
    const getPopupContainer = modal
        ? () =>
              (document.getElementsByClassName("modal")[0] as HTMLElement) ||
              document.body
        : undefined;

    return (
        <Select
            defaultValue={defaultValue} // Pass the object directly
            className={className}
            placeholder={placeholder ? placeholder : "Select"}
            style={{ width: "100%" }}
            getPopupContainer={getPopupContainer}
            labelInValue // Required for handling objects in `defaultValue` and `onChange`
            value={value}
            onChange={onChange}
            disabled={disabled}>
            {options.map(option => (
                <Option key={option.value} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </Select>
    );
};

export default CustomSelect;

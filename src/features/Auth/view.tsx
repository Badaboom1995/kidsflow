import React from "react";
import Input from "../../parts/Input";
import Select from "../../parts/Select";
import RadioGroup from "../../parts/RadioGroup";
import Checkbox from "../../parts/Checkbox";
import { Wrapper, Form, Fields, FormTitle } from "./styled";
import mail from "./assets/mail.svg";
import password from "./assets/password.svg";
import { Link } from "../../parts/styled";
import Button from "../../parts/Button";

function AuthView(props: any) {
  return (
    <Wrapper>
      <Form onSubmit={props.handleSubmit}>
        <FormTitle>Create a new account</FormTitle>
        <Fields>
          <Input
            name="name"
            placeholder="Enter your name"
            error={props.errors.name}
            touched={!!props.touched.name}
          />
          <Input
            name="email"
            placeholder="Email"
            icon={mail}
            error={props.errors.email}
            touched={!!props.touched.email}
          />
          <Input
            name="password"
            placeholder="Password"
            password
            icon={password}
            error={props.errors.password}
            touched={!!props.touched.password}
          />
          <Select
            title="Select country"
            options={[
              "Latvia",
              "Lebanon",
              "Lesotho",
              "Liberia",
              "Libia",
              "Macedonia",
              "Litva",
            ]}
            groupName="country"
            error={props.errors.country}
            touched={!!props.touched.country}
            onChange={props.handleChange}
          />
          <RadioGroup
            groupName="gender"
            options={[
              { name: "Male", value: "male" },
              { name: "Female", value: "female" },
            ]}
            error={props.errors.gender}
            touched={!!props.touched.gender}
          />
          <Checkbox
            name="terms"
            error={props.errors.terms}
            touched={props.touched}
            setTouched={props.setTouched}
          >
            <span>
              Accept <Link>terms</Link> and <Link>conditions</Link>
            </span>
          </Checkbox>
        </Fields>

        <Button disabled={!props.isValid} loading={props.loading}>
          Sign up
        </Button>
      </Form>
    </Wrapper>
  );
}
export default AuthView;

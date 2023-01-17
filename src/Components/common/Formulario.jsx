import React from "react";

import {
  nameIsBlank,
  numberIsBlank,
  monthIsBlank,
  yearIsBlank,
  cvcIsBlank,
} from "../../Utils/inputValidations.js";

function Formulario({ form, setIsConfirmed }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = form;
  const onSubmit = () => setIsConfirmed(true);
  return (
    <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="">CARDHOLDER NAME</label>
        <input
          type="text"
          {...register("name", {
            required: true,
            maxLength: 35,
            pattern:
              /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
            validate: nameIsBlank,
          })}
          placeholder="e.g.Jane Appleseed"
          maxLength="35"
          className={errors.name ? "error" : ""}
        />
        {errors.name?.type === "required" && (
          <span className="error">This field is required</span>
        )}
        {errors.name?.type === "pattern" && (
          <span className="error">Wrong format, letters only</span>
        )}
        {errors.name?.type === "validate" && (
          <span className="error">This field is required</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="">CARD NUMBER</label>
        <input
          type="text"
          {...register("number", {
            required: true,
            pattern: /\b(?:\d[ -]*?){16,19}\b/,
            validate: numberIsBlank,
          })}
          placeholder="e.g_ 1234 5678 9123 0000"
          maxLength="19"
          min="19"
          className={errors.number ? "error" : ""}
          value={watch("number")
            .replace(/\s/g, "")
            .replace(/(\d{4})/g, "$1 ")
            .trim()}
        />
        {errors.number?.type === "required" && (
          <span className="error">This field is required</span>
        )}
        {errors.number?.type === "pattern" && (
          <span className="error">Wrong format</span>
        )}
        {errors.number?.type === "validate" && (
          <span className="error">This field is required</span>
        )}
      </div>
      <div className="form-group cardInfo">
        <div className="form-group_date">
          <label htmlFor="">EXP.DATE (MM/YY)</label>
          <div className="form_group_date-dateInfo-container">
            <div className="form_group_date-dateInfo">
              <input
                type="text"
                {...register("expMonth", {
                  required: true,
                  maxLength: 2,
                  pattern: /^(0[1-9]|1[012])$/,
                  min: 1,
                  max: 12,
                  validate: monthIsBlank,
                })}
                placeholder="MM"
                maxLength="2"
                min="1"
                max="12"
                className={errors.expMonth ? "error" : ""}
              />
              <input
                type="text"
                {...register("expYear", {
                  required: true,
                  pattern: /^(2[1-9]|0[012])$/,
                  validate: yearIsBlank,
                })}
                placeholder="YY"
                maxLength="2"
                min="23"
                max="27"
                className={errors.expYear ? "error" : ""}
              />
            </div>
          </div>
          {errors.expMonth?.type === "required" && (
            <span className="error"> This field is required</span>
          )}
          {errors.expYear?.type === "required" && (
            <span className="error"> This field is required</span>
          )}
          {errors.expMonth?.type === "pattern" && (
            <span className="error"> Wrong format</span>
          )}
          {errors.expYear?.type === "pattern" && (
            <span className="error"> Wrong format</span>
          )}
          {errors.expMonth?.type === "validate" && (
            <span className="error"> This field is required</span>
          )}
          {errors.expYear?.type === "validate" && (
            <span className="error"> This field is required</span>
          )}
          {errors.expMonth?.type === "max" &&
            errors.expMonth?.type === "min" && (
              <span className="error"> Wrong format</span>
            )}
          {errors.expYear?.type === "max" && errors.expYear?.type === "min" && (
            <span className="error"> Wrong format</span>
          )}
        </div>
        <div className="form-group_cvc">
          <label htmlFor="">CVC</label>
          <input
            type="text"
            {...register("cvc", {
              required: true,
              maxLength: 3,
              pattern: /^[0-9]{3,4}$/,
              validate: cvcIsBlank,
            })}
            placeholder="e.g. 123"
            maxLength="3"
            className={errors.cvc ? "error" : ""}
          />
          {errors.cvc?.type === "required" && (
            <span className="error">This field is required</span>
          )}
          {errors.cvc?.type === "pattern" && (
            <span className="error">Wrong format</span>
          )}
          {errors.cvc?.type === "validate" && (
            <span className="error">This field is required</span>
          )}
        </div>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="confirm"
          className="btnConfirm"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default Formulario;

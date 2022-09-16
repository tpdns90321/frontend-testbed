import classNames from "classnames";
import {
  useCallback,
  FormHTMLAttributes,
  FormEventHandler,
  FormEvent,
  ReactElement,
} from "react";

function Form(props: FormHTMLAttributes<HTMLFormElement>): ReactElement {
  const { onSubmit, className } = props;
  const beforeOnSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      // form tab의 기본 동작을 비활성화합니다.
      e.preventDefault();
      // 비활성화 작업 이후에 실행한 핸들러가 할당된 상태라면 이어서 실행합니다.
      if (onSubmit != null) {
        onSubmit(e);
      }
    },
    [onSubmit]
  );

  return (
    <form
      {...props}
      className={classNames(
        "flex flex-col m-2 p-2 bg-transparent border-2 border-white rounded-lg",
        className
      )}
      onSubmit={beforeOnSubmit}
    />
  );
}

export default Form;

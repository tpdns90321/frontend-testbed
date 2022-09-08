import { useRef, useState, useCallback, RefObject, TextareaHTMLAttributes, FormEvent, useEffect } from "react";
import classNames from "classnames";

type AutoResizeTextAreaProps = {
  textareaRef?: RefObject<HTMLTextAreaElement>,
};

// 문자열의 개행 시 크기가 자동으로 늘어나는 컴포넌트입니다.
const AutoResizeTextArea = (props: AutoResizeTextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const { textareaRef, className, ...childProps } = props;
  const defaultRef = useRef(null);
  const ref = textareaRef ? textareaRef : defaultRef;

  const [minimumHeight, setMinimumHeightSize] = useState(0);

  useEffect(() => {
	const textareaRef = ref.current;
	if (minimumHeight == 0 && textareaRef) {
	  console.log(textareaRef.clientHeight);
	  setMinimumHeightSize(textareaRef.clientHeight / textareaRef.rows);
	}
  }, [minimumHeight]);

  const detectSizeBeforeOnInput = useCallback((e: FormEvent<HTMLTextAreaElement>) => {
	const textarea = ref.current;
	if (!textarea) {
	  return;
	}

	const minimumHeightStyle = minimumHeight.toString() + 'px';
	textarea.style.height = minimumHeightStyle;
	if (textarea.scrollHeight < minimumHeight) {
	  textarea.style.height = minimumHeightStyle;
	} else {
	  textarea.style.height = `${textarea.scrollHeight}px`;
	}

	if (props.onInput) {
	  props.onInput(e);
	}
  }, [props.onInput]);

  return (
	<textarea {...childProps} ref={ref} className={classNames(className, "resize-none overflow-hidden")} onInput={detectSizeBeforeOnInput} />
  )
};

export default AutoResizeTextArea;

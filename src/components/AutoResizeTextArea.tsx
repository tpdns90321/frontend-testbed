import { useRef, useCallback, LegacyRef, TextareaHTMLAttributes, FormEvent } from "react";

const MINIMUM_TEXTAREA_HEIGHT_PER_ROW = 34

function AutoResizeTextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const textareaRef: LegacyRef<HTMLTextAreaElement> = useRef(null);

  const detectSizeBeforeOnInput = useCallback((e: FormEvent<HTMLTextAreaElement>) => {
	const textarea = textareaRef.current!;
	if (!textarea) {
	  return;
	}

	const rows = textarea.rows;
	const minimumHeight = MINIMUM_TEXTAREA_HEIGHT_PER_ROW * rows;
	const minimumHeightStyle = minimumHeight.toString() + 'px';
	textarea.style.height = minimumHeightStyle;
	textarea.style.height = `${textarea.scrollHeight}px`;
	if (textarea.scrollHeight < minimumHeight) {
	  textarea.style.height = minimumHeightStyle;
	}

	if (props.onInput) {
	  props.onInput(e);
	}
  }, [props.onInput]);

  return (
	<textarea {...props} ref={textareaRef} className="resize-none overflow-hidden" onInput={detectSizeBeforeOnInput} />
  )
}

export default AutoResizeTextArea;


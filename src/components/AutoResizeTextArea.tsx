import {
  useRef,
  useState,
  useCallback,
  RefObject,
  TextareaHTMLAttributes,
  FormEvent,
  useEffect,
  ReactElement,
} from 'react';
import classNames from 'classnames';

interface AutoResizeTextAreaProps {
  textareaRef?: RefObject<HTMLTextAreaElement>;
}

// 문자열의 개행 시 크기가 자동으로 늘어나는 컴포넌트입니다.
function AutoResizeTextArea(
  props: AutoResizeTextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
): ReactElement {
  const { textareaRef, className, ...childProps } = props;
  const defaultRef = useRef(null);
  const ref = textareaRef != null ? textareaRef : defaultRef;

  const [minimumHeight, setMinimumHeightSize] = useState(0);

  useEffect(() => {
    const textarea = ref.current;
    if (minimumHeight === 0 && textarea != null) {
      setMinimumHeightSize(textarea.clientHeight);
    }
  }, [minimumHeight]);

  const detectSizeBeforeOnInput = useCallback(
    (e: FormEvent<HTMLTextAreaElement>) => {
      const textarea = ref.current;
      if (textarea == null) {
        return;
      }

      const minimumHeightStyle = minimumHeight.toString() + 'px';
      textarea.style.height = minimumHeightStyle;
      if (textarea.scrollHeight < minimumHeight) {
        textarea.style.height = minimumHeightStyle;
      } else {
        textarea.style.height = `${textarea.scrollHeight}px`;
      }

      if (props.onInput != null) {
        props.onInput(e);
      }
    },
    [minimumHeight, props.onInput]
  );

  return (
    <textarea
      {...childProps}
      ref={ref}
      className={classNames(className, 'resize-none overflow-hidden')}
      onInput={detectSizeBeforeOnInput}
    />
  );
}

export default AutoResizeTextArea;

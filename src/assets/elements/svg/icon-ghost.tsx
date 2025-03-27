type Props = React.ComponentProps<'svg'>;
export function IconGhost({ className, ...props }: Props) {
  return (
    <svg
      width='144'
      height='145'
      viewBox='0 0 144 145'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M103.768 143.901C90.7788 144.566 75.9082 144.566 70.8548 143.901C31.4353 138.715 0 109.894 0 70.9374C0 31.9806 32.2355 0.399902 72 0.399902C111.765 0.399902 144 31.9806 144 70.9374C144 89.0558 137.027 105.579 125.567 118.071C122.455 121.463 126.725 123.843 131.063 126.26C135.318 128.632 139.638 131.039 137.127 134.475C134.36 138.261 119.36 143.103 103.768 143.901ZM61.875 62.1202C61.875 68.207 56.8381 73.1416 50.625 73.1416C44.4119 73.1416 39.375 68.207 39.375 62.1202C39.375 58.0379 41.6405 54.4742 45.0068 52.5692C45.2005 57.8767 49.5644 62.1199 54.9194 62.1199H61.875V62.1202ZM96.7433 52.5692C96.5495 57.8767 92.1856 62.1199 86.8306 62.1199H79.875V62.1202C79.875 68.207 84.9119 73.1416 91.125 73.1416C97.3381 73.1416 102.375 68.207 102.375 62.1202C102.375 58.0379 100.11 54.4742 96.7433 52.5692Z'
        fill={props.color || 'var(--ghost-color)'}
      />
    </svg>
  );
}

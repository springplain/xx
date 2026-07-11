type Props = {
  className?: string;
};

export function DsosLogo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 80 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DSOS"
      fill="currentColor"
    >
      <text
        x="0"
        y="19"
        fontSize="20"
        fontWeight="700"
        letterSpacing="0.18em"
        fontFamily="var(--font-jost), Jost, sans-serif"
      >
        DSOS
      </text>
    </svg>
  );
}

type Props = React.ComponentProps<"svg">;
export function IconDragon({ className, ...props }: Props) {
  return (
    <svg
      width="126"
      height="145"
      viewBox="0 0 126 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.9856 72.0852C70.9616 71.4901 71.7896 70.243 72.4573 68.857C81.2449 72.4486 87.4203 80.9356 87.4203 90.833C87.4203 103.981 76.5219 114.641 63.0781 114.641C57.5595 114.641 52.4697 112.844 48.3868 109.817C47.0475 109.183 45.9455 108.574 45.0438 108.075C43.6452 107.302 42.728 106.795 42.1537 106.874C40.4749 107.106 40.9623 108.65 41.4053 110.053C41.706 111.007 41.9864 111.894 41.5524 112.261C41.0985 112.644 39.6281 111.242 37.9099 109.604C35.5711 107.374 32.7732 104.707 31.4538 105.508C30.4107 106.141 31.4235 107.86 32.6632 109.964L32.7552 110.12C33.2789 111.009 33.8858 111.915 34.4396 112.741C35.5654 114.421 36.4722 115.774 36.0185 116.003C35.4701 116.28 31.649 113.701 28.429 110.12C27.1861 108.738 25.9824 107.24 24.8636 105.848V105.848C22.4147 102.801 20.3746 100.263 19.2293 100.563C17.8516 100.925 18.8938 103.767 20.4252 106.501C21.1412 107.78 21.9836 109.082 22.7129 110.21V110.21C23.8471 111.964 24.7081 113.294 24.3959 113.458C23.9746 113.678 20.2674 110.063 17.7495 105.508C16.2539 102.802 14.9982 99.8117 13.9815 97.3909C12.879 94.7655 12.0577 92.8099 11.5169 92.6131C9.63798 91.9293 9.63797 95.7602 10.3916 101.289C10.4899 102.011 10.6362 102.767 10.8165 103.538C18.1246 127.183 40.5742 144.4 67.1352 144.4C99.6243 144.4 125.962 118.641 125.962 86.8652C125.962 56.6218 102.104 31.8287 71.7907 29.5076C71.829 28.0829 72.5726 25.2576 72.5726 25.2576C72.5726 25.2576 77.9239 12.3101 78.2069 9.54331C78.2254 9.35968 78.2476 9.16014 78.2716 8.94762C78.6048 5.95822 79.225 0.399902 74.4432 0.399902C71.8894 0.399902 70.702 2.29964 69.3438 4.47237V4.4724C68.8224 5.30651 68.2757 6.18086 67.617 7.00337C62.8728 12.9278 54.8955 20.3261 50.3721 24.2676C40.8113 32.5985 31.4311 39.4453 25.9602 43.4385L25.9599 43.4387C23.4717 45.2548 21.7923 46.4807 21.2726 46.9873C17.3559 50.8055 3.31247 76.1366 3.31247 76.1366C3.31247 76.1366 -1.22902 84.2636 0.385217 85.912C1.99945 87.5601 5.89218 87.1824 5.89218 87.1824C5.89218 87.1824 58.1881 75.1851 62.87 74.239C64.1306 73.9842 65.0205 73.8371 65.7036 73.7243C67.5585 73.418 67.8915 73.3629 69.9856 72.0852ZM33.0106 56.6679C30.2034 59.3361 25.5479 65.705 25.5479 65.705C25.5479 65.705 34.2002 66.238 38.9655 61.7085C43.731 57.1786 42.6391 49.4592 42.6391 49.4592C42.6391 49.4592 35.8174 53.9997 33.0106 56.6679Z"
        fill="var(--dragon-color)"
      />
    </svg>
  );
}

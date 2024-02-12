export const Icons={
 locationIcon : (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          fill="none"
          {...props}
        >
          <defs>
            <clipPath id="a">
              <path fill="#fff" fillOpacity={0} d="M0 0h30v30H0z" />
            </clipPath>
          </defs>
          <path fill="none" d="M0 0h30v30H0z" />
          <g fill="#000" clipPath="url(#a)">
            <path d="M14.994 0C8.365 0 2.969 5.396 2.969 12.025c0 .755.069 1.516.214 2.258a11.85 11.85 0 0 0 .887 2.774c1.295 3.05 4.144 7.735 10.396 12.754a.854.854 0 0 0 1.069 0c6.245-5.018 9.1-9.704 10.396-12.754a11.701 11.701 0 0 0 .887-2.774 12.38 12.38 0 0 0 .214-2.258C27.019 5.396 21.622 0 14.994 0Zm10.138 13.987c0 .013-.006.026-.006.038-.006.032-.025.126-.057.27v.013a9.987 9.987 0 0 1-.698 2.05c-.006.007-.006.02-.012.026-1.176 2.786-3.755 7.037-9.365 11.673-5.61-4.636-8.189-8.887-9.365-11.673-.006-.007-.006-.02-.013-.026a10.665 10.665 0 0 1-.698-2.05v-.012c-.037-.145-.05-.24-.056-.27 0-.013-.007-.026-.007-.045a10.275 10.275 0 0 1-.188-1.962c0-5.692 4.635-10.327 10.327-10.327S25.32 6.327 25.32 12.019c0 .666-.063 1.327-.189 1.968Z" />
            <path d="M14.994 4.522c-4.208 0-7.635 3.428-7.635 7.635 0 4.208 3.427 7.635 7.635 7.635 4.207 0 7.635-3.427 7.635-7.635 0-4.207-3.428-7.635-7.635-7.635Zm0 13.572a5.944 5.944 0 0 1-5.937-5.937 5.948 5.948 0 0 1 5.937-5.937 5.948 5.948 0 0 1 5.937 5.937c0 3.27-2.66 5.937-5.937 5.937Z" />
          </g>
        </svg>
      ),
shoppingCartIcon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={22.438}
          fill="none"
          viewBox="0 0 30 22.439"
          {...props}
        >
          <path
            fill="#2F3035"
            d="m30 0-.929 2.493H26.66l-4.343 14.96H5.77L0 3.74h21.015l-.705 2.493H3.76l3.671 8.726h13.035L24.756 0H30ZM10.625 18.699a1.873 1.873 0 0 0-1.875 1.87c0 1.033.84 1.87 1.875 1.87a1.872 1.872 0 0 0 1.875-1.87c0-1.032-.84-1.87-1.875-1.87Zm8.625-8.726-2.375 8.726A1.872 1.872 0 0 0 15 20.569c0 1.033.84 1.87 1.875 1.87a1.872 1.872 0 0 0 1.875-1.87c0-1.032-.84-1.87-1.875-1.87l2.375-8.726Z"
          />
        </svg>
      ),   
logoIcon:(props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={80}
          height={76}
          fill="none"
          {...props}
        >
          <defs>
            <clipPath id="a">
              <path fill="#000" fillOpacity={0} d="M0 0h80v76H0z" />
            </clipPath>
          </defs>
          <path fill="none" d="M0 0h80v76H0z" />
          <g clipPath="url(#a)">
            <path fill="#FFF" d="M-31-20H69V80H-31z" />
          </g>
        </svg>
      ) ,
 userIcon:(props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={23.999}
          height={23.934}
          fill="none"
          {...props}
        >
          <path
            fill="#2F3035"
            d="M20.823 18.047c-3.44-.792-6.64-1.486-5.09-4.406C20.452 4.753 16.982 0 12 0 6.918 0 3.536 4.935 8.268 13.64c1.596 2.938-1.726 3.632-5.09 4.407-3.074.708-3.189 2.23-3.179 4.89l.004.997h23.99l.005-.966c.012-2.68-.092-4.21-3.176-4.921Z"
          />
        </svg>
      ),
likeIcon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={21.94}
          fill="none"
          {...props}
        >
          <path
            fill="#2F3035"
            d="M12 8.206c.234-1.117 1.547-6.211 5.382-6.211C19.602 1.995 22 3.54 22 6.984c0 3.896-3.627 8.447-10 12.594C5.627 15.431 2 10.88 2 6.984c0-3.475 2.369-4.992 4.577-4.992 3.923 0 5.145 5.112 5.423 6.214ZM0 6.984c0 4.057 3.06 9.455 12 14.956 8.94-5.501 12-10.9 12-14.956 0-7.94-9.648-9.004-12-3.727C9.662-1.991 0-1.001 0 6.984Z"
          />
        </svg>
      )     

}
// import clsx from 'clsx';

interface IContainerProps {
    children: React.ReactNode;
    className?: string;
}

const clsx = (...args: string[]) => {
    return args.join(' ');
}

export function Container({ children, className = '' }: IContainerProps) {
    return <div className={clsx("px-4 mobile:px-[30px] mobile:mx-auto mobile:max-w-screen-mobile sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl", className)}>
        {children}
    </div>
}
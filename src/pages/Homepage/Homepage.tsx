import { Container } from "components/Layout";

export function Homepage() {
    return (
    <Container>
        <div className="relative h-fit flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] text-center text-primary font-primary font-normal leading-[100%] tracking-[-2px] lg:tracking-[-6px] capitalize">
                Take Control Of Your Recovery Journey.
            </h1>
            <p className="px-8 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center text-secondary font-secondary font-normal" style={{ lineHeight: "normal" }}>
                Are you ready to embark on a transformative journey to optimize your vitality and well-being? Look no further than ReNAD+.
            </p>
        </div>
        <div className="flex flex-col w-full gap-y-2 sm:w-auto sm:flex-row">
            <button className="w-full rounded-full border-[1.125px] text-button border-primary py-[16.872px] gap-[12px] flex justify-center items-center font-secondary text-[16px] font-bold fill-primary stroke-primary hover:stroke-white hover:bg-primary hover:text-white hover:fill-white transition duration-300" style={{ lineHeight: "normal" }}>
                Get A Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="30" viewBox="0 0 39 30">
                    <path d="M27.1572 16.3447C27.4891 16.0128 27.4891 15.4747 27.1572 15.1428L21.7488 9.73448C21.417 9.40259 20.8789 9.40259 20.547 9.73448C20.2151 10.0664 20.2151 10.6045 20.547 10.9363L25.3544 15.7438L20.547 20.5512C20.2151 20.8831 20.2151 21.4212 20.547 21.7531C20.8789 22.0849 21.417 22.0849 21.7488 21.7531L27.1572 16.3447ZM0.211308 16.5936H26.5563L26.5563 14.8939H0.211308L0.211308 16.5936Z" />
                    <circle cx="24.0069" cy="15.3194" r="13.5975" fill="none" strokeWidth="1.69968" />
                </svg>
            </button>
        </div>
    </Container>
    )
}
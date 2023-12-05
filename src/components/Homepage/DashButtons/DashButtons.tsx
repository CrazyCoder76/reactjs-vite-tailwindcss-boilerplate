import styles from './DashButtons.module.scss';

export function DashButtons() {
    return (
        <div className={styles.root}>
            <button className={styles.btn1} style={{ lineHeight: "normal" }}>
                <span>Get A Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="30" viewBox="0 0 39 30">
                    <path d="M27.1572 16.3447C27.4891 16.0128 27.4891 15.4747 27.1572 15.1428L21.7488 9.73448C21.417 9.40259 20.8789 9.40259 20.547 9.73448C20.2151 10.0664 20.2151 10.6045 20.547 10.9363L25.3544 15.7438L20.547 20.5512C20.2151 20.8831 20.2151 21.4212 20.547 21.7531C20.8789 22.0849 21.417 22.0849 21.7488 21.7531L27.1572 16.3447ZM0.211308 16.5936H26.5563L26.5563 14.8939H0.211308L0.211308 16.5936Z" />
                    <circle cx="24.0069" cy="15.3194" r="13.5975" fill="none" strokeWidth="1.69968" />
                </svg>
            </button>
            <button  className={styles.btn2} style={{ lineHeight: "normal" }}>
                <span>AI Tool Kit</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="30" viewBox="0 0 39 30">
                    <path d="M27.1572 16.3447C27.4891 16.0128 27.4891 15.4747 27.1572 15.1428L21.7488 9.73448C21.417 9.40259 20.8789 9.40259 20.547 9.73448C20.2151 10.0664 20.2151 10.6045 20.547 10.9363L25.3544 15.7438L20.547 20.5512C20.2151 20.8831 20.2151 21.4212 20.547 21.7531C20.8789 22.0849 21.417 22.0849 21.7488 21.7531L27.1572 16.3447ZM0.211308 16.5936H26.5563L26.5563 14.8939H0.211308L0.211308 16.5936Z" />
                    <circle cx="24.0069" cy="15.3194" r="13.5975" fill="none" strokeWidth="1.69968" />
                </svg>
            </button>
        </div>
    );
}
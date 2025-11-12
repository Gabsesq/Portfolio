export default function LoadingScreen() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            minWidth: '100%',
            minHeight: '100%',
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            overflow: 'hidden',
            margin: 0,
            padding: 0
        }}>
            <div className="loading-image-wrapper">
                <img
                    src="/LOADING.png"
                    alt="Loading"
                    style={{
                        width: '100%',
                        maxWidth: '100vw',
                        height: 'auto',
                        maxHeight: '100vh',
                        objectFit: 'contain'
                    }}
                />
                <div className="loading-dots">
                    <span className="loading-dot" />
                    <span className="loading-dot" />
                    <span className="loading-dot" />
                </div>
            </div>
        </div>
    );
}
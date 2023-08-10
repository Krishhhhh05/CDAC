// SettingsPage.js
import React from 'react';
import Sidebar from './Sidebar';
import './Style.css';


class SettingsPage extends React.Component {
    state = {
        name: 'John Doe',
        sapId: '123456789',
        college: 'Example University',
        testResults: [
            { subject: 'Math', score: 95 },
            { subject: 'Science', score: 88 },
            { subject: 'History', score: 75 },
        ],
    };

    render() {
        return (
            <>
                <div className='App'>
                    <div className="settings-page">
                        <Sidebar />
                        <h1>Student Settings</h1>
                        <div className="profile-photo">
                            <img src="../assets/theorylec2.png" alt="Profile" style={{ width: '40%', height: '40%', }} />
                            <button>Change Photo</button>
                        </div>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>SAP ID:</label>
                            <input
                                type="text"
                                value={this.state.sapId}
                                onChange={(e) => this.setState({ sapId: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>College:</label>
                            <input
                                type="text"
                                value={this.state.college}
                                onChange={(e) => this.setState({ college: e.target.value })}
                            />
                        </div>
                        <div>
                            <h2>Test Results</h2>
                            <ul>
                                {this.state.testResults.map((result, index) => (
                                    <li key={index}>
                                        {result.subject}: {result.score}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SettingsPage;

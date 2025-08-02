<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Work Wise - منصة التوظيف الذكية</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Cairo', sans-serif;
        }
        
        :root {
            --primary: #2563eb;
            --secondary: #1e40af;
            --accent: #f59e0b;
            --light: #f8fafc;
            --dark: #1e293b;
            --gray: #64748b;
            --success: #10b981;
            --concentrix: #ff6b6b;
            --hsbc: #4d96ff;
            --volumex: #6bcb77;
            --staff-bg: #f0f7ff;
        }
        
        body {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            color: var(--dark);
            min-height: 100vh;
            padding: 20px;
            transition: background 0.5s ease;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
        }
        
        /* شريط التنقل */
        .navbar {
            background: white;
            border-radius: 15px;
            padding: 15px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            margin-bottom: 30px;
            transition: all 0.3s ease;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .logo h1 {
            font-size: 1.8rem;
            color: var(--secondary);
            background: linear-gradient(45deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .logo i {
            font-size: 2rem;
            color: var(--accent);
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .nav-links {
            display: flex;
            gap: 25px;
        }
        
        .nav-links a {
            color: var(--dark);
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            padding: 8px 15px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .nav-links a:hover {
            background: var(--light);
        }
        
        .nav-links a.active {
            background: var(--primary);
            color: white;
        }
        
        .staff-login-btn {
            padding: 10px 25px;
            background: var(--accent);
            color: var(--dark);
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 6px rgba(245, 158, 11, 0.3);
        }
        
        .staff-login-btn:hover {
            background: #e69008;
            transform: translateY(-2px);
        }
        
        /* قسم الرئيسية */
        .home-section {
            background: white;
            border-radius: 20px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            padding: 40px;
            margin-bottom: 40px;
            animation: fadeIn 0.8s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        header {
            text-align: center;
            padding: 30px 0;
            margin-bottom: 40px;
        }
        
        header h1 {
            font-size: 3.5rem;
            color: var(--secondary);
            margin-bottom: 10px;
            position: relative;
            display: inline-block;
            background: linear-gradient(45deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        header h1::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 150px;
            height: 5px;
            background: var(--accent);
            border-radius: 10px;
        }
        
        header p {
            font-size: 1.2rem;
            color: var(--gray);
            max-width: 700px;
            margin: 20px auto;
            line-height: 1.8;
        }
        
        /* فئات الوظائف */
        .categories {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 40px;
        }
        
        .category-btn {
            padding: 12px 25px;
            background: white;
            border: 2px solid var(--primary);
            border-radius: 50px;
            font-weight: bold;
            color: var(--primary);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .category-btn:hover, .category-btn.active {
            background: var(--primary);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
        }
        
        /* بطاقات الوظائف */
        .jobs-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
        }
        
        .job-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 20px rgba(0,0,0,0.08);
            transition: transform 0.3s ease;
            position: relative;
            border-top: 5px solid var(--primary);
        }
        
        .job-card.concentrix {
            border-top-color: var(--concentrix);
        }
        
        .job-card.hsbc {
            border-top-color: var(--hsbc);
        }
        
        .job-card.volumex {
            border-top-color: var(--volumex);
        }
        
        .job-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        
        .job-header {
            background: var(--primary);
            color: white;
            padding: 20px;
            position: relative;
        }
        
        .job-header.concentrix {
            background: var(--concentrix);
        }
        
        .job-header.hsbc {
            background: var(--hsbc);
        }
        
        .job-header.volumex {
            background: var(--volumex);
        }
        
        .job-header h3 {
            font-size: 1.5rem;
            margin-bottom: 5px;
        }
        
        .job-type {
            background: var(--accent);
            color: var(--dark);
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            position: absolute;
            top: 20px;
            left: 20px;
            font-weight: bold;
        }
        
        .job-body {
            padding: 25px;
        }
        
        .job-details {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            border-bottom: 1px dashed #e2e8f0;
            padding-bottom: 20px;
        }
        
        .detail {
            text-align: center;
            flex: 1;
        }
        
        .detail i {
            font-size: 1.5rem;
            color: var(--primary);
            margin-bottom: 5px;
        }
        
        .detail span {
            display: block;
            font-weight: bold;
            margin-top: 5px;
            font-size: 0.9rem;
        }
        
        .requirements {
            background: #f8fafc;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
            border-left: 3px solid var(--primary);
        }
        
        .requirements h4 {
            margin-bottom: 10px;
            color: var(--dark);
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .requirements ul {
            padding-right: 20px;
        }
        
        .requirements li {
            margin-bottom: 8px;
            position: relative;
            padding-right: 15px;
        }
        
        .requirements li::before {
            content: "•";
            color: var(--primary);
            font-weight: bold;
            position: absolute;
            right: 0;
        }
        
        .select-btn {
            display: block;
            width: 100%;
            padding: 15px;
            background: var(--success);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s ease;
            box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);
        }
        
        .select-btn:hover {
            background: #0da271;
            transform: translateY(-2px);
        }
        
        /* قسم التقديم */
        .application-section {
            background: white;
            border-radius: 20px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            padding: 40px;
            margin: 50px 0;
            display: none;
            animation: fadeIn 0.8s ease;
        }
        
        .application-section h2 {
            text-align: center;
            color: var(--secondary);
            margin-bottom: 30px;
            font-size: 2.2rem;
            background: linear-gradient(45deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .application-form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group.full {
            grid-column: span 2;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: var(--dark);
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .form-group input, .form-group textarea {
            width: 100%;
            padding: 15px;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        
        .form-group input:focus, .form-group textarea:focus {
            border-color: var(--primary);
            outline: none;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
        }
        
        .voice-recorder {
            background: #f1f5f9;
            border-radius: 15px;
            padding: 25px;
            margin: 20px 0;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
        }
        
        .recorder-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .recorder-title {
            font-size: 1.3rem;
            color: var(--secondary);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .recorder-controls {
            display: flex;
            gap: 15px;
        }
        
        .recorder-btn {
            padding: 12px 20px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: background 0.3s ease;
        }
        
        .recorder-btn:disabled {
            background: var(--gray);
            cursor: not-allowed;
            opacity: 0.7;
        }
        
        .recorder-btn.stop {
            background: #ef4444;
        }
        
        .recorder-btn.stop:hover {
            background: #dc2626;
        }
        
        .recorder-btn:hover {
            background: var(--secondary);
            transform: translateY(-2px);
        }
        
        .timer {
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--dark);
            margin: 15px 0;
        }
        
        .recording-visualizer {
            height: 80px;
            background: #e2e8f0;
            border-radius: 10px;
            margin: 20px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            padding: 0 20px;
            display: none;
        }
        
        .bar {
            width: 8px;
            background: var(--primary);
            border-radius: 10px;
            height: 30px;
            animation: pulse 1.2s infinite ease-in-out;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(0.4); }
        }
        
        .audio-playback {
            width: 100%;
            margin: 20px 0;
            display: none;
        }
        
        .submit-btn {
            grid-column: span 2;
            padding: 18px;
            background: var(--secondary);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s ease;
            margin-top: 20px;
            box-shadow: 0 4px 6px rgba(30, 64, 175, 0.3);
        }
        
        .submit-btn:hover {
            background: var(--primary);
            transform: translateY(-2px);
        }
        
        /* قسم الموظفين */
        .staff-section {
            background: white;
            border-radius: 20px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            padding: 40px;
            margin: 50px 0;
            text-align: center;
            display: none;
            animation: fadeIn 0.8s ease;
        }
        
        .staff-section h2 {
            color: var(--secondary);
            margin-bottom: 20px;
            font-size: 2rem;
            background: linear-gradient(45deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .staff-section p {
            color: var(--gray);
            max-width: 600px;
            margin: 0 auto 30px;
            line-height: 1.7;
        }
        
        .login-form {
            max-width: 500px;
            margin: 0 auto;
        }
        
        .password-input {
            position: relative;
            margin-bottom: 25px;
        }
        
        .password-input input {
            width: 100%;
            padding: 16px 50px 16px 20px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            font-size: 1.1rem;
            transition: border-color 0.3s ease;
        }
        
        .password-input input:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
        }
        
        .password-toggle {
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            cursor: pointer;
            color: var(--gray);
            background: none;
            border: none;
            font-size: 1.2rem;
        }
        
        .staff-btn {
            padding: 16px 40px;
            background: var(--accent);
            color: var(--dark);
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s ease;
            box-shadow: 0 4px 6px rgba(245, 158, 11, 0.3);
        }
        
        .staff-btn:hover {
            background: #e69008;
            transform: translateY(-2px);
        }
        
        /* لوحة تحكم الموظفين */
        .dashboard-section {
            background: white;
            border-radius: 20px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            padding: 40px;
            margin: 50px 0;
            display: none;
            animation: fadeIn 0.8s ease;
        }
        
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .dashboard-header h2 {
            font-size: 1.8rem;
            color: var(--secondary);
            background: linear-gradient(45deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .stats-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .stat-card {
            background: white;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            border-top: 4px solid var(--primary);
            transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        
        .stat-card.concentrix {
            border-top-color: var(--concentrix);
        }
        
        .stat-card.hsbc {
            border-top-color: var(--hsbc);
        }
        
        .stat-card.volumex {
            border-top-color: var(--volumex);
        }
        
        .stat-card h3 {
            font-size: 1.1rem;
            color: var(--gray);
            margin-bottom: 15px;
        }
        
        .stat-card .value {
            font-size: 2rem;
            font-weight: bold;
            color: var(--dark);
        }
        
        /* قائمة المتقدمين */
        .applicants-section {
            background: white;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            padding: 25px;
            margin-top: 30px;
        }
        
        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
        }
        
        .section-header h3 {
            font-size: 1.5rem;
            color: var(--secondary);
        }
        
        .controls {
            display: flex;
            gap: 15px;
        }
        
        .filter-btn, .export-btn {
            padding: 10px 20px;
            background: var(--staff-bg);
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: background 0.3s ease;
        }
        
        .filter-btn:hover, .export-btn:hover {
            background: #e2e8f0;
        }
        
        .search-box {
            position: relative;
            width: 300px;
        }
        
        .search-box input {
            width: 100%;
            padding: 12px 20px 12px 45px;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 1rem;
        }
        
        .search-box i {
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            color: var(--gray);
        }
        
        /* جدول المتقدمين */
        .applicants-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        
        .applicants-table th {
            background: var(--staff-bg);
            padding: 15px;
            text-align: right;
            font-weight: 700;
            color: var(--dark);
            border-bottom: 2px solid #e2e8f0;
        }
        
        .applicants-table td {
            padding: 15px;
            border-bottom: 1px solid #e2e8f0;
            color: var(--gray);
        }
        
        .applicants-table tr:hover {
            background: #f8fafc;
        }
        
        .applicant-name {
            display: flex;
            align-items: center;
            gap: 15px;
            font-weight: 600;
            color: var(--dark);
        }
        
        .applicant-name img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .status {
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            display: inline-block;
        }
        
        .status.pending {
            background: #fffbeb;
            color: #f59e0b;
        }
        
        .status.reviewed {
            background: #ecfdf5;
            color: #10b981;
        }
        
        .status.rejected {
            background: #fef2f2;
            color: #ef4444;
        }
        
        .action-btn {
            padding: 8px 15px;
            background: var(--staff-bg);
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s ease;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .action-btn:hover {
            background: #e2e8f0;
        }
        
        /* تفاصيل المتقدم */
        .applicant-detail {
            background: white;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            padding: 30px;
            margin-top: 30px;
            display: none;
            animation: fadeIn 0.8s ease;
        }
        
        .detail-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .detail-header h3 {
            font-size: 1.8rem;
            color: var(--secondary);
        }
        
        .close-btn {
            background: var(--staff-bg);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2rem;
            transition: background 0.3s ease;
        }
        
        .close-btn:hover {
            background: #e2e8f0;
        }
        
        .applicant-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 30px;
        }
        
        .info-card {
            background: var(--staff-bg);
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.05);
        }
        
        .info-card h4 {
            margin-bottom: 15px;
            color: var(--secondary);
            padding-bottom: 10px;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .info-row {
            display: flex;
            margin-bottom: 15px;
        }
        
        .info-label {
            font-weight: 600;
            color: var(--dark);
            width: 150px;
        }
        
        .info-value {
            flex: 1;
            color: var(--gray);
        }
        
        /* مشغل الصوت */
        .voice-player {
            background: var(--staff-bg);
            border-radius: 15px;
            padding: 25px;
            margin-top: 20px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.05);
        }
        
        .player-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .player-header h4 {
            font-size: 1.3rem;
            color: var(--secondary);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .audio-controls {
            display: flex;
            gap: 15px;
        }
        
        .audio-player {
            width: 100%;
            margin-top: 15px;
        }
        
        .transcript {
            background: white;
            border-radius: 10px;
            padding: 20px;
            margin-top: 20px;
            border: 1px solid #e2e8f0;
        }
        
        .transcript h5 {
            margin-bottom: 15px;
            color: var(--dark);
        }
        
        .transcript p {
            line-height: 1.8;
            color: var(--gray);
        }
        
        footer {
            text-align: center;
            padding: 30px 0;
            color: var(--gray);
            border-top: 1px solid #e2e8f0;
            margin-top: 50px;
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background: var(--success);
            color: white;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            display: none;
            z-index: 1000;
        }
        
        @media (max-width: 768px) {
            .application-form {
                grid-template-columns: 1fr;
            }
            
            .form-group.full {
                grid-column: span 1;
            }
            
            .submit-btn {
                grid-column: span 1;
            }
            
            .jobs-container {
                grid-template-columns: 1fr;
            }
            
            header h1 {
                font-size: 2.5rem;
            }
            
            .navbar {
                flex-direction: column;
                gap: 15px;
            }
            
            .nav-links {
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .dashboard-header {
                flex-direction: column;
                gap: 15px;
                align-items: flex-start;
            }
            
            .section-header {
                flex-direction: column;
                gap: 15px;
                align-items: flex-start;
            }
            
            .controls {
                width: 100%;
                flex-direction: column;
            }
            
            .search-box {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- شريط التنقل -->
        <nav class="navbar">
            <div class="logo">
                <i class="fas fa-briefcase"></i>
                <h1>Work Wise</h1>
            </div>
            
            <div class="nav-links">
                <a href="#" class="active" id="homeLink"><i class="fas fa-home"></i> الرئيسية</a>
                <a href="#" id="jobsLink"><i class="fas fa-briefcase"></i> الوظائف</a>
                <a href="#" id="applyLink"><i class="fas fa-file-alt"></i> التقديم</a>
                <a href="#" id="aboutLink"><i class="fas fa-info-circle"></i> عنا</a>
            </div>
            
            <button class="staff-login-btn" id="staffLoginBtn">
                <i class="fas fa-lock"></i> دخول الموظفين
            </button>
        </nav>
        
        <!-- قسم الرئيسية -->
        <section id="homeSection" class="home-section">
            <header>
                <h1><i class="fas fa-briefcase"></i> Work Wise</h1>
                <p>منصة التوظيف الذكية التي تتيح لك البحث عن أفضل الفرص الوظيفية. نقدم لك أحدث الوظائف في كبرى الشركات مع إمكانية التقديم المباشر عبر المنصة.</p>
            </header>
            
            <!-- فئات الوظائف -->
            <div class="categories">
                <button class="category-btn active">جميع الوظائف</button>
                <button class="category-btn">وظائف حديثة</button>
                <button class="category-btn">أعلى راتب</button>
                <button class="category-btn">عن بُعد</button>
                <button class="category-btn">دوام جزئي</button>
            </div>
            
            <!-- قائمة الوظائف -->
            <div class="jobs-container">
                <!-- وظيفة Concentrix الإنجليزية -->
                <div class="job-card concentrix">
                    <div class="job-header concentrix">
                        <div class="job-type">دوام كامل</div>
                        <h3>مندوب خدمة عملاء (الإنجليزية)</h3>
                        <p>Concentrix</p>
                    </div>
                    <div class="job-body">
                        <div class="job-details">
                            <div class="detail">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>المهندسين/المعادي</span>
                            </div>
                            <div class="detail">
                                <i class="fas fa-money-bill-wave"></i>
                                <span>14,000 - 19,000 ج.م</span>
                            </div>
                            <div class="detail">
                                <i class="fas fa-clock"></i>
                                <span>9 ساعات</span>
                            </div>
                        </div>
                        
                        <div class="requirements">
                            <h4><i class="fas fa-list-check"></i> المتطلبات:</h4>
                            <ul>
                                <li>إجادة اللغة الإنجليزية (مستوى B2 أو C1)</li>
                                <li>خبرة سنة</li>
                                <li>مؤهل عالي</li>
                            </ul>
                        </div>
                        
                        <div class="requirements">
                            <h4><i class="fas fa-gift"></i> المزايا:</h4>
                            <ul>
                                <li>بدل مواصلات</li>
                                <li>تأمين صحي</li>
                                <li>بدل وجبات</li>
                                <li>عمولات وحوافز (تصل ل 2000)</li>
                            </ul>
                        </div>
                        
                        <button class="select-btn" data-job="مندوب خدمة عملاء (الإنجليزية)">
                            <i class="fas fa-paper-plane"></i> التقديم على الوظيفة
                        </button>
                    </div>
                </div>
                
                <!-- وظيفة Concentrix الفرنسية -->
                <div class="job-card concentrix">
                    <div class="job-header concentrix">
                        <div class="job-type">دوام كامل</div>
                        <h3>مندوب خدمة عملاء (الفرنسية)</h3>
                        <p>Concentrix</p>
                    </div>
                    <div class="job-body">
                        <div class="job-details">
                            <div class="detail">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>مدينة نصر</span>
                            </div>
                            <div class="detail">
                                <i class="fas fa-money-bill-wave"></i>
                                <span>26,000 - 34,000 ج.م</span>
                            </div>
                            <div class="detail">
                                <i class="fas fa-clock"></i>
                                <span>9 ساعات</span>
                            </div>
                        </div>
                        
                        <div class="requirements">
                            <h4><i class="fas fa-list-check"></i> المتطلبات:</h4>
                            <ul>
                                <li>إجادة اللغة الفرنسية (مستوى B2 أو C1)</li>
                                <li>خبرة سنتين</li>
                                <li>مؤهل عالي</li>
                            </ul>
                        </div>
                        
                        <div class="requirements">
                            <h4><i class="fas fa-gift"></i> المزايا:</h4>
                            <ul>
                                <li>بدل لغة 5,000 جنيه</li>
                                <li>تأمين صحي</li>
                                <li>بدل وجبات</li>
                                <li>مكافآت أداء شهرية</li>
                            </ul>
                        </div>
                        
                        <button class="select-btn" data-job="مندوب خدمة عملاء (الفرنسية)">
                            <i class="fas fa-paper-plane"></i> التقديم على الوظيفة
                        </button>
                    </div>
                </div>
                
                <!-- وظيفة HSBC -->
                <div class="job-card hsbc">
                    <div class="job-header hsbc">
                        <div class="job-type">دوام كامل</div>
                        <h3>ممثل خدمة عملاء</h3>
                        <p>HSBC</p>
                    </div>
                    <div class="job-body">
                        <div class="job-details">
                            <div class="detail">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Smart Village</span>
                            </div>
                            <div class="detail">
                                <i class="fas fa-money-bill-wave"></i>
                                <span>9,000 - 15,700 ج.م</span>
                            </div>
                            <div class="detail">
                                <i class="fas fa-clock"></i>
                                <span>9 ساعات</span>
                            </div>
                        </div>
                        
                        <div class="requirements">
                            <h4><i class="fas fa-list-check"></i> المتطلبات:</h4>
                            <ul>
                                <li>إجادة اللغة الإنجليزية (مستوى B2)</li>
                                <li>سن لا يزيد عن 35 سنة</li>
                                <li>مؤهل عالي</li>
                                <li>لا يشترط خبرة</li>
                            </ul>
                        </div>
                        
                        <div class="requirements">
                            <h4><i class="fas fa-gift"></i> المزايا:</h4>
                            <ul>
                                <li>تأمين صحي</li>
                                <li>بدل وجبات</li>
                                <li>مكافآت + Bonus</li>
                                <li>تدريب مجاني</li>
                                <li>مواصلات مجانية</li>
                            </ul>
                        </div>
                        
                        <button class="select-btn" data-job="ممثل خدمة عملاء">
                            <i class="fas fa-paper-plane"></i> التقديم على الوظيفة
                        </button>
                    </div>
                </div>
                
                <!-- وظيفة Volume X -->
                <div class="job-card volumex">
                    <div class="job-header volumex">
                        <div class="job-type">عن بعد</div>
                        <h3>مترجم محتوى (فرنسي)</h3>
                        <p>Volume X</p>
                    </div>
                    <div class="job-body">
                        <div class="job-details">
                            <div class="detail">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>عن بعد</span>
                            </div>
                            <div class="detail">
                                <i class="fas fa-money-bill-wave"></i>
                                <span>$4.2/ساعة + مكافآت</span>
                            </div>
                            <div class="detail">
                                <i class="fas fa-clock"></i>
                                <span>40 ساعة/أسبوع</span>
                            </div>
                        </div>
                        
                        <div class="requirements">
                            <h4><i class="fas fa-list-check"></i> المتطلبات:</h4>
                            <ul>
                                <li>إجادة اللغة الفرنسية (مستوى B2)</li>
                                <li>خبرة 6 أشهر في الترجمة</li>
                                <li>جهاز كمبيوتر واتصال إنترنت</li>
                                <li>القدرة على العمل بشكل مستقل</li>
                            </ul>
                        </div>
                        
                        <div class="requirements">
                            <h4><i class="fas fa-gift"></i> المزايا:</h4>
                            <ul>
                                <li>عمل مرن من المنزل</li>
                                <li>راتب أسبوعي + مكافآت</li>
                                <li>تدريب مجاني (شهادة معتمدة)</li>
                                <li>فرصة للترقية إلى مناصب قيادية</li>
                            </ul>
                        </div>
                        
                        <button class="select-btn" data-job="مترجم محتوى (فرنسي)">
                            <i class="fas fa-paper-plane"></i> التقديم على الوظيفة
                        </button>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- قسم التقديم -->
        <section id="applicationSection" class="application-section">
            <h2><i class="fas fa-file-alt"></i> تقديم على الوظيفة</h2>
            <form class="application-form">
                <div class="form-group">
                    <label for="fullName"><i class="fas fa-user"></i> الاسم بالكامل</label>
                    <input type="text" id="fullName" required>
                </div>
                
                <div class="form-group">
                    <label for="phoneNumber"><i class="fas fa-phone"></i> رقم الهاتف</label>
                    <input type="tel" id="phoneNumber" required>
                </div>
                
                <div class="form-group">
                    <label for="email"><i class="fas fa-envelope"></i> البريد الإلكتروني</label>
                    <input type="email" id="email">
                </div>
                
                <div class="form-group">
                    <label for="jobPosition"><i class="fas fa-briefcase"></i> الوظيفة المختارة</label>
                    <input type="text" id="jobPosition" readonly>
                </div>
                
                <div class="form-group full">
                    <label><i class="fas fa-edit"></i> ملاحظات</label>
                    <textarea rows="3" placeholder="أخبرنا عن خبراتك ومؤهلاتك..."></textarea>
                </div>
                
                <div class="form-group full">
                    <div class="voice-recorder">
                        <div class="recorder-header">
                            <div class="recorder-title">
                                <i class="fas fa-microphone"></i> تسجيل صوتي (حد أقصى 4 دقائق)
                            </div>
                            <div class="recorder-controls">
                                <button type="button" class="recorder-btn" id="recordBtn">
                                    <i class="fas fa-circle"></i> بدء التسجيل
                                </button>
                                <button type="button" class="recorder-btn stop" id="stopBtn" disabled>
                                    <i class="fas fa-stop"></i> إيقاف التسجيل
                                </button>
                            </div>
                        </div>
                        
                        <div class="timer" id="timer">00:00</div>
                        
                        <div class="recording-visualizer" id="visualizer">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
                        
                        <audio class="audio-playback" id="audioPlayback" controls></audio>
                    </div>
                </div>
                
                <button type="submit" class="submit-btn">
                    <i class="fas fa-paper-plane"></i> إرسال الطلب
                </button>
            </form>
        </section>
        
        <!-- قسم الموظفين -->
        <section id="staffSection" class="staff-section">
            <h2><i class="fas fa-lock"></i> دخول الموظفين</h2>
            <p>هذه المنطقة مخصصة لموظفي التوظيف فقط. الرجاء إدخال كلمة المرور للوصول إلى لوحة التحكم.</p>
            
            <div class="login-form">
                <div class="password-input">
                    <input type="password" id="password" placeholder="أدخل كلمة المرور">
                    <button class="password-toggle" id="passwordToggle">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
                
                <button class="staff-btn" id="staffLogin">دخول الموظفين</button>
            </div>
        </section>
        
        <!-- لوحة تحكم الموظفين -->
        <section id="dashboardSection" class="dashboard-section">
            <div class="dashboard-header">
                <h2><i class="fas fa-tachometer-alt"></i> لوحة تحكم الموظفين</h2>
                <button class="staff-login-btn" id="logoutBtn">
                    <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
                </button>
            </div>
            
            <!-- إحصائيات التطبيقات -->
            <div class="stats-cards">
                <div class="stat-card">
                    <h3>إجمالي المتقدمين</h3>
                    <div class="value">147</div>
                    <div class="trend"><i class="fas fa-arrow-up"></i> +12% عن الشهر الماضي</div>
                </div>
                
                <div class="stat-card concentrix">
                    <h3>متقدمو Concentrix</h3>
                    <div class="value">68</div>
                    <div class="trend"><i class="fas fa-arrow-up"></i> +8% عن الشهر الماضي</div>
                </div>
                
                <div class="stat-card hsbc">
                    <h3>متقدمو HSBC</h3>
                    <div class="value">42</div>
                    <div class="trend"><i class="fas fa-arrow-down"></i> -3% عن الشهر الماضي</div>
                </div>
                
                <div class="stat-card volumex">
                    <h3>متقدمو Volume X</h3>
                    <div class="value">37</div>
                    <div class="trend"><i class="fas fa-arrow-up"></i> +22% عن الشهر الماضي</div>
                </div>
            </div>
            
            <!-- قائمة المتقدمين -->
            <div class="applicants-section">
                <div class="section-header">
                    <h3><i class="fas fa-user-friends"></i> المتقدمون الجدد</h3>
                    
                    <div class="controls">
                        <div class="search-box">
                            <input type="text" id="searchInput" placeholder="ابحث باسم المتقدم...">
                            <i class="fas fa-search"></i>
                        </div>
                        <button class="filter-btn"><i class="fas fa-filter"></i> تصفية</button>
                        <button class="export-btn"><i class="fas fa-file-export"></i> تصدير</button>
                    </div>
                </div>
                
                <table class="applicants-table">
                    <thead>
                        <tr>
                            <th>المتقدم</th>
                            <th>الوظيفة</th>
                            <th>رقم الهاتف</th>
                            <th>البريد الإلكتروني</th>
                            <th>تاريخ التقديم</th>
                            <th>الحالة</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody id="applicantsTableBody">
                        <!-- سيتم ملؤها ديناميكيًا -->
                    </tbody>
                </table>
            </div>
            
            <!-- تفاصيل المتقدم -->
            <div class="applicant-detail" id="applicantDetail">
                <div class="detail-header">
                    <h3>تفاصيل المتقدم</h3>
                    <button class="close-btn" id="closeDetail"><i class="fas fa-times"></i></button>
                </div>
                
                <div class="applicant-info">
                    <div class="info-card">
                        <h4><i class="fas fa-user"></i> المعلومات الشخصية</h4>
                        <div class="info-row">
                            <div class="info-label">الاسم الكامل:</div>
                            <div class="info-value" id="detail-fullName">-</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">رقم الهاتف:</div>
                            <div class="info-value" id="detail-phone">-</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">البريد الإلكتروني:</div>
                            <div class="info-value" id="detail-email">-</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">تاريخ الميلاد:</div>
                            <div class="info-value" id="detail-birthdate">-</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">المدينة:</div>
                            <div class="info-value" id="detail-city">-</div>
                        </div>
                    </div>
                    
                    <div class="info-card">
                        <h4><i class="fas fa-briefcase"></i> معلومات التقديم</h4>
                        <div class="info-row">
                            <div class="info-label">الوظيفة:</div>
                            <div class="info-value" id="detail-job">-</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">الشركة:</div>
                            <div class="info-value" id="detail-company">-</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">تاريخ التقديم:</div>
                            <div class="info-value" id="detail-date">-</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">الحالة:</div>
                            <div class="info-value" id="detail-status">-</div>
                        </div>
                    </div>
                    
                    <div class="info-card">
                        <h4><i class="fas fa-graduation-cap"></i> المؤهلات العلمية</h4>
                        <div class="info-row">
                            <div class="info-label">الجامعة:</div>
                            <div class="info-value" id="detail-university">-</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">التخصص:</div>
                            <div class="info-value" id="detail-specialization">-</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">سنة التخرج:</div>
                            <div class="info-value" id="detail-graduation">-</div>
                        </div>
                    </div>
                    
                    <div class="info-card">
                        <h4><i class="fas fa-file-alt"></i> ملاحظات المتقدم</h4>
                        <div class="info-row">
                            <div class="info-label">ملاحظاته:</div>
                            <div class="info-value" id="detail-notes">-</div>
                        </div>
                    </div>
                </div>
                
                <!-- مشغل الصوت -->
                <div class="voice-player">
                    <div class="player-header">
                        <h4><i class="fas fa-microphone-alt"></i> التسجيل الصوتي للمتقدم</h4>
                        <div class="audio-controls">
                            <button class="action-btn"><i class="fas fa-download"></i> تحميل</button>
                            <button class="action-btn"><i class="fas fa-share-alt"></i> مشاركة</button>
                        </div>
                    </div>
                    
                    <audio class="audio-player" controls id="detail-audio">
                        <source src="#" type="audio/mpeg">
                        المتصفح لا يدعم تشغيل الصوت.
                    </audio>
                    
                    <div class="transcript">
                        <h5>نص التسجيل:</h5>
                        <p id="detail-transcript">"أعمل في مجال خدمة العملاء منذ 3 سنوات في شركة اتصالات. لدي خبرة في التعامل مع شكاوى العملاء وحل المشكلات بشكل فعال. أتقن اللغة الإنجليزية بطلاقة وأتمتع بمهارات اتصال ممتازة. أبحث عن فرصة للتطور المهني في بيئة عمل محفزة."</p>
                    </div>
                </div>
                
                <!-- إجراءات المتقدم -->
                <div style="display: flex; gap: 15px; margin-top: 30px;">
                    <button class="action-btn" style="background: var(--success); color: white;" id="acceptBtn">
                        <i class="fas fa-check"></i> قبول المتقدم
                    </button>
                    <button class="action-btn" style="background: #ef4444; color: white;" id="rejectBtn">
                        <i class="fas fa-times"></i> رفض المتقدم
                    </button>
                    <button class="action-btn" id="emailBtn">
                        <i class="fas fa-envelope"></i> إرسال بريد
                    </button>
                    <button class="action-btn" id="interviewBtn">
                        <i class="fas fa-phone"></i> جدولة مقابلة
                    </button>
                </div>
            </div>
        </section>
        
        <footer>
            <p>جميع الحقوق محفوظة &copy; 2023 Work Wise - منصة التوظيف الذكية</p>
        </footer>
        
        <div class="notification" id="notification">تم إرسال طلبك بنجاح!</div>
    </div>

    <script>
        // التحكم بين الأقسام
        const homeSection = document.getElementById('homeSection');
        const applicationSection = document.getElementById('applicationSection');
        const staffSection = document.getElementById('staffSection');
        const dashboardSection = document.getElementById('dashboardSection');
        const notification = document.getElementById('notification');
        
        document.getElementById('homeLink').addEventListener('click', (e) => {
            e.preventDefault();
            showSection(homeSection);
        });
        
        document.getElementById('jobsLink').addEventListener('click', (e) => {
            e.preventDefault();
            showSection(homeSection);
            window.scrollTo(0, document.querySelector('.jobs-container').offsetTop - 100);
        });
        
        document.getElementById('applyLink').addEventListener('click', (e) => {
            e.preventDefault();
            showSection(applicationSection);
        });
        
        document.getElementById('staffLoginBtn').addEventListener('click', (e) => {
            e.preventDefault();
            showSection(staffSection);
        });
        
        function showSection(section) {
            homeSection.style.display = 'none';
            applicationSection.style.display = 'none';
            staffSection.style.display = 'none';
            dashboardSection.style.display = 'none';
            section.style.display = 'block';
            window.scrollTo(0, 0);
        }
        
        // اختيار وظيفة والتقديم
        const selectBtns = document.querySelectorAll('.select-btn');
        const jobPositionInput = document.getElementById('jobPosition');
        
        selectBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const jobTitle = btn.getAttribute('data-job');
                jobPositionInput.value = jobTitle;
                showSection(applicationSection);
                
                // التمرير إلى الأعلى
                applicationSection.scrollIntoView({ behavior: 'smooth' });
            });
        });
        
        // مسجل الصوت
        const recordBtn = document.getElementById('recordBtn');
        const stopBtn = document.getElementById('stopBtn');
        const timer = document.getElementById('timer');
        const visualizer = document.getElementById('visualizer');
        const audioPlayback = document.getElementById('audioPlayback');
        
        let mediaRecorder;
        let audioChunks = [];
        let recording = false;
        let seconds = 0;
        let timerInterval;
        const maxDuration = 4 * 60; // 4 دقائق كحد أقصى
        
        // بدء التسجيل
        recordBtn.addEventListener('click', async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorder = new MediaRecorder(stream);
                
                mediaRecorder.ondataavailable = (e) => {
                    audioChunks.push(e.data);
                };
                
                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    audioPlayback.src = audioUrl;
                    audioPlayback.style.display = 'block';
                };
                
                mediaRecorder.start();
                recording = true;
                recordBtn.disabled = true;
                stopBtn.disabled = false;
                visualizer.style.display = 'flex';
                
                // بدء المؤقت
                seconds = 0;
                timerInterval = setInterval(() => {
                    seconds++;
                    const mins = Math.floor(seconds / 60);
                    const secs = seconds % 60;
                    timer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
                    
                    // إيقاف التسجيل تلقائياً عند الوصول للحد الأقصى
                    if (seconds >= maxDuration) {
                        stopRecording();
                    }
                }, 1000);
            } catch (err) {
                alert('تعذر الوصول إلى الميكروفون. يرجى التحقق من الإعدادات.');
                console.error('Microphone access error:', err);
            }
        });
        
        // إيقاف التسجيل
        stopBtn.addEventListener('click', stopRecording);
        
        function stopRecording() {
            if (mediaRecorder && recording) {
                mediaRecorder.stop();
                recording = false;
                clearInterval(timerInterval);
                recordBtn.disabled = false;
                stopBtn.disabled = true;
                visualizer.style.display = 'none';
            }
        }
        
        // إظهار/إخفاء كلمة المرور
        const passwordToggle = document.getElementById('passwordToggle');
        const passwordInput = document.getElementById('password');
        
        passwordToggle.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            passwordToggle.innerHTML = type === 'password' ? 
                '<i class="fas fa-eye"></i>' : 
                '<i class="fas fa-eye-slash"></i>';
        });
        
        // إرسال الطلب
        const applicationForm = document.querySelector('.application-form');
        
        applicationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // التحقق من وجود تسجيل صوتي
            if (!audioPlayback.src) {
                alert('الرجاء إضافة تسجيل صوتي قبل الإرسال');
                return;
            }
            
            // إظهار الإشعار
            notification.style.display = 'block';
            notification.textContent = 'تم إرسال طلبك بنجاح! سيتم مراجعته من قبل فريق التوظيف.';
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 5000);
            
            // إعادة تعيين النموذج
            setTimeout(() => {
                applicationForm.reset();
                audioPlayback.style.display = 'none';
                timer.textContent = '00:00';
                seconds = 0;
                audioChunks = [];
                showSection(homeSection);
            }, 3000);
        });
        
        // تصفية الوظائف
        const categoryBtns = document.querySelectorAll('.category-btn');
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // في الواقع هنا سيتم تصفية الوظائف
                // سنقوم بعرض رسالة للمستخدم
                notification.style.display = 'block';
                notification.textContent = 'تم تطبيق التصفية بنجاح!';
                
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 3000);
            });
        });
        
        // دخول الموظفين
        document.getElementById('staffLogin').addEventListener('click', () => {
            const password = passwordInput.value;
            
            // كلمة المرور: workwise123456
            if (password === 'workwise123456') {
                showSection(dashboardSection);
                loadApplications();
            } else {
                alert('كلمة المرور غير صحيحة. الرجاء المحاولة مرة أخرى.');
            }
        });
        
        // تسجيل خروج الموظفين
        document.getElementById('logoutBtn').addEventListener('click', () => {
            if (confirm('هل تريد تسجيل الخروج من لوحة التحكم؟')) {
                showSection(homeSection);
            }
        });
        
        // عرض تفاصيل المتقدم
        const applicantDetail = document.getElementById('applicantDetail');
        const closeDetail = document.getElementById('closeDetail');
        
        closeDetail.addEventListener('click', () => {
            applicantDetail.style.display = 'none';
        });
        
        // بحث المتقدمين
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = document.querySelectorAll('#applicantsTableBody tr');
            
            rows.forEach(row => {
                const name = row.querySelector('.applicant-name span').textContent.toLowerCase();
                const job = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
                const phone = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
                const email = row.querySelector('td:nth-child(4)').textContent.toLowerCase();
                
                if (name.includes(searchTerm) || job.includes(searchTerm) || 
                    phone.includes(searchTerm) || email.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
        
        // بيانات المتقدمين (بدون بيانات وهمية)
        let applications = [];
        
        // تحميل المتقدمين عند فتح لوحة التحكم
        function loadApplications() {
            const applicantsTableBody = document.getElementById('applicantsTableBody');
            applicantsTableBody.innerHTML = '';
            
            applications.forEach(app => {
                const row = document.createElement('tr');
                
                // توليد صورة عشوائية للمتقدم
                const randomId = Math.floor(Math.random() * 100);
                const gender = Math.random() > 0.5 ? 'men' : 'women';
                
                row.innerHTML = `
                    <td>
                        <div class="applicant-name">
                            <img src="https://randomuser.me/api/portraits/${gender}/${randomId}.jpg" alt="صورة المتقدم">
                            <span>${app.fullName}</span>
                        </div>
                    </td>
                    <td>${app.job}</td>
                    <td>${app.phone}</td>
                    <td>${app.email}</td>
                    <td>${app.date}</td>
                    <td><span class="status ${app.status}">${getStatusText(app.status)}</span></td>
                    <td><button class="action-btn view-btn" data-id="${app.id}"><i class="fas fa-eye"></i> عرض</button></td>
                `;
                
                applicantsTableBody.appendChild(row);
            });
            
            // إضافة مستمعي الأحداث لأزرار العرض
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const appId = btn.getAttribute('data-id');
                    const application = applications.find(app => app.id == appId);
                    
                    if (application) {
                        showApplicationDetails(application);
                    }
                });
            });
        }
        
        function getStatusText(status) {
            switch(status) {
                case 'pending': return 'في الانتظار';
                case 'reviewed': return 'قيد المراجعة';
                case 'rejected': return 'مرفوض';
                default: return status;
            }
        }
        
        function showApplicationDetails(application) {
            document.getElementById('detail-fullName').textContent = application.fullName;
            document.getElementById('detail-phone').textContent = application.phone;
            document.getElementById('detail-email').textContent = application.email || 'غير متوفر';
            document.getElementById('detail-birthdate').textContent = '15 مايو 1995';
            document.getElementById('detail-city').textContent = 'القاهرة';
            document.getElementById('detail-job').textContent = application.job;
            document.getElementById('detail-company').textContent = getCompanyByJob(application.job);
            document.getElementById('detail-date').textContent = application.date;
            document.getElementById('detail-status').innerHTML = `<span class="status ${application.status}">${getStatusText(application.status)}</span>`;
            document.getElementById('detail-university').textContent = 'جامعة القاهرة';
            document.getElementById('detail-specialization').textContent = 'اللغة الإنجليزية';
            document.getElementById('detail-graduation').textContent = '2017';
            document.getElementById('detail-notes').textContent = application.notes || 'لا توجد ملاحظات';
            
            applicantDetail.style.display = 'block';
            
            // التمرير إلى قسم التفاصيل
            applicantDetail.scrollIntoView({ behavior: 'smooth' });
        }
        
        function getCompanyByJob(job) {
            if (job.includes('الإنجليزية') || job.includes('الفرنسية')) return 'Concentrix';
            if (job.includes('ممثل')) return 'HSBC';
            if (job.includes('مترجم')) return 'Volume X';
            return 'غير معروف';
        }
        
        // إنشاء بعض البيانات الوهمية للعرض التوضيحي
        function generateDemoData() {
            const jobs = [
                'مندوب خدمة عملاء (الإنجليزية)',
                'مندوب خدمة عملاء (الفرنسية)',
                'ممثل خدمة عملاء',
                'مترجم محتوى (فرنسي)'
            ];
            
            const names = [
                'سارة أحمد', 'محمد حسن', 'فاطمة محمود', 'خالد وليد', 
                'نوران سيد', 'أحمد علي', 'منى سعيد', 'عمر خالد'
            ];
            
            const statuses = ['pending', 'reviewed', 'rejected'];
            
            for (let i = 0; i < 8; i++) {
                const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
                const randomName = names[Math.floor(Math.random() * names.length)];
                const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
                
                applications.push({
                    id: i + 1,
                    fullName: randomName,
                    phone: `010${Math.floor(10000000 + Math.random() * 90000000)}`,
                    email: `${randomName.replace(' ', '.').toLowerCase()}@example.com`,
                    job: randomJob,
                    notes: 'أعمل في مجال خدمة العملاء منذ 3 سنوات في شركة اتصالات.',
                    date: `2023-07-${Math.floor(20 + Math.random() * 10)}`,
                    status: randomStatus
                });
            }
        }
        
        // تهيئة التطبيق
        document.addEventListener('DOMContentLoaded', () => {
            generateDemoData();
            showSection(homeSection);
        });
    </script>
</body>
</html>

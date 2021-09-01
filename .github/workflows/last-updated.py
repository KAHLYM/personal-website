from datetime import datetime
# Script is Unix-targeted so use "%-d" and not Windows-targeted "%#d"
dt = datetime.today().strftime('%B %-d, %y')
with open('src/assets/LastUpdated.jsx', 'w') as f:
    f.write('const LastUpdated = "' + dt + '"; export default LastUpdated;')

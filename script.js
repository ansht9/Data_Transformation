document.getElementById('sendBtn').addEventListener('click', function() {
    const chatbox = document.getElementById('chatbox');
    chatbox.innerHTML = '<p>"You are a SQL developer. Please generate a Postgres SQL script to convert the first source table to be consistent with the format of the second target table. First, you must create the first table named Source1_1 with only the given attributes: DT_STRATA, DOW, PCT_HOURLY_0100, PCT_HOURLY_0200, PCT_HOURLY_0300, PCT_HOURLY_0400, PCT_HOURLY_0500, PCT_HOURLY_0600, PCT_HOURLY_0700, PCT_HOURLY_0800, PCT_HOURLY_0900, PCT_HOURLY_1000, PCT_HOURLY_1100, PCT_HOURLY_1200, PCT_HOURLY_1300, PCT_HOURLY_1400, PCT_HOURLY_1500, PCT_HOURLY_1600, PCT_HOURLY_1700, PCT_HOURLY_1800, PCT_HOURLY_1900, PCT_HOURLY_2000, PCT_HOURLY_2100, PCT_HOURLY_2200, PCT_HOURLY_2300, PCT_HOURLY_2400. Please delete the table before creating it if the first table exists. The source samples are as follows: 1/1/16, H, .001222017108240, .001274017836250, .001131015834222, .001222017108240, .001222017108240, .001261017654247, .001144016016224, .001170016380229, .001170016380229, .001209016926237, .001183016562232, .001235017290242, .001157016198227, .001001014014196, .001014014196199, .001144016016224, .001209016926237, .001547021658303, .001560021840306, .001534021476301, .001573022022308, .001573022022308, .001326018564260, .001170016380229, .000000000000000; 1/2/16, 7, .001313018382257, .001248017472245, .001222017108240, .001196016744234, .001196016744234, .001287018018252, .001300018200255, .001339018746262, .001352018928265, .001404019656275, .001417019838278, .001326018564260, .001313018382257, .001352018928265, .001339018746262, .001391019474273, .001404019656275, .001495020930293, .001521021294298, .001508021112296, .001534021476301, .001534021476301, .001469020566288, .001339018746262, .000000000000000; 1/3/16, 1, .001157016198227, .001092015288214, .001053014742206, .001040014560204, .001040014560204, .001066014924209, .001053014742206, .001144016016224, .001183016562232, .001248017472245, .001326018564260, .001404019656275, .001313018382257, .001300018200255, .001313018382257, .001261017654247, .001261017654247, .001430020020280, .001469020566288, .001404019656275, .001456020384285, .001378019292270, .001287018018252, .001222017108240, .000000000000000; 1/4/16, 2, .001105015470217, .001053014742206, .001001014014196, .000975013650191, .001053014742206, .001079015106211, .001183016562232, .001170016380229, .001274017836250, .001170016380229, .001157016198227, .001196016744234, .001196016744234, .001144016016224, .001170016380229, .001261017654247, .001300018200255, .001495020930293, .001586022204311, .001651023114324, .001651023114324, .001521021294298, .001417019838278, .001274017836250, .000000000000000; 1/5/16, 3, .001183016562232, .001170016380229, .001079015106211, .001131015834222, .001170016380229, .001183016562232, .001300018200255, .001365019110268, .001404019656275, .001378019292270, .001352018928265, .001326018564260, .001365019110268, .001339018746262, .001300018200255, .001313018382257, .001404019656275, .001638022932321, .001716024024336, .001677023478329, .001625022750319, .001638022932321, .001573022022308, .001417019838278, .000000000000000. Second, read CSV file from the given path "<span class="highlight">Some explanation for the source table: DT_STRATA represents date. DOW is in the type of Text. PCT_HOURLY_0100 and so on are hourly load values for the strata. PCT_HOURLY_2500 should be ignored. Some explanation for the target table: The target table records the total load of each hour of the 24 hours of a given CST date. In addition, CST is a column that contains both the day of week in abbreviation format, such as Mon, Tue, Wed, Thu, Fri, Sat, and Sun, and the date in the form of mm/dd/yyyy. An example of CST value is \'Fri 01/01/2016\'. All transformed CST values must conform to the format.</span></p>'; // Display the message with highlighted part

    setTimeout(() => {
        chatbox.innerHTML += '<p>DROP TABLE IF EXISTS Source1_1; CREATE TABLE Source1_1 ( DT_STRATA DATE, DOW TEXT, PCT_HOURLY_0100 NUMERIC, PCT_HOURLY_0200 NUMERIC, PCT_HOURLY_0300 NUMERIC, PCT_HOURLY_0400 NUMERIC, PCT_HOURLY_0500 NUMERIC, PCT_HOURLY_0600 NUMERIC, PCT_HOURLY_0700 NUMERIC, PCT_HOURLY_0800 NUMERIC, PCT_HOURLY_0900 NUMERIC, PCT_HOURLY_1000 NUMERIC, PCT_HOURLY_1100 NUMERIC, PCT_HOURLY_1200 NUMERIC, PCT_HOURLY_1300 NUMERIC, PCT_HOURLY_1400 NUMERIC, PCT_HOURLY_1500 NUMERIC, PCT_HOURLY_1600 NUMERIC, PCT_HOURLY_1700 NUMERIC, PCT_HOURLY_1800 NUMERIC, PCT_HOURLY_1900 NUMERIC, PCT_HOURLY_2000 NUMERIC, PCT_HOURLY_2100 NUMERIC, PCT_HOURLY_2200 NUMERIC, PCT_HOURLY_2300 NUMERIC, PCT_HOURLY_2400 NUMERIC ); -- Step 2: Read CSV file and insert into Source1_1 table -- Note: This step cannot be performed with a SQL script alone. It requires a tool or script to read the CSV file and execute the INSERT statements. -- The following is a pseudo-code representation of what the process would look like: -- COPY Source1_1 FROM</p>'; // Reply after a short delay
    }, 1000); // Wait for 1 second before replying
});

function handleFileUpload(inputId, listId) {
    const fileInput = document.getElementById(inputId);
    const fileList = document.getElementById(listId);
    const file = fileInput.files[0];
  
    if (file) {
      const listItem = document.createElement('li');
  
      // Create button for modal display
      const viewButton = document.createElement('button');
      viewButton.textContent = 'View';
      viewButton.onclick = () => displayCsvModal(file);
      listItem.textContent = `${file.name} - ${formatBytes(file.size)}`;
      listItem.appendChild(viewButton);
  
      fileList.appendChild(listItem);
    }
  }
  
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  
  function displayCsvModal(file) {
    const modal = document.getElementById('csvModal');
    const modalContent = document.getElementById('modalCsvContent');
  
    // Clear previous content
    modalContent.innerHTML = '';
  
    // Read the CSV content
    const reader = new FileReader();
    reader.onload = function(event) {
      const csvContent = event.target.result;
  
      // Create a pre element to display CSV content
      const pre = document.createElement('pre');
      pre.textContent = csvContent;
      modalContent.appendChild(pre);
  
      // Display modal
      modal.style.display = 'block';
    };
  
    // Assume the file is a CSV and read it
    reader.readAsText(file);
  }
  
  // Close the modal when the close button (×) is clicked
  const closeModalButton = document.querySelector('.close');
  closeModalButton.addEventListener('click', function() {
    const modal = document.getElementById('csvModal');
    modal.style.display = 'none';
  });
  
  // Close the modal if user clicks outside the modal content
  window.onclick = function(event) {
    const modal = document.getElementById('csvModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  
  

  
  
      const showDataButton = document.getElementById('showDataButton');
      const sqlContainer = document.getElementById('sqlContainer');
      const csvContainer = document.getElementById('csvContainer');
  
      // SQL code example (just for demonstration)
      const sqlCode = `
-- SQL script to transform data from multiple source tables to a target table format using PostgreSQL.

-- Step 1: Drop Source Tables if they exist
DROP TABLE IF EXISTS Source2_0_0;
DROP TABLE IF EXISTS Source2_0_1;

-- Step 2: Create Source Table Source2_0_0
CREATE TABLE Source2_0_0 (
    "School ID" INT,
    "school_name" VARCHAR(255),
    "type" VARCHAR(50),
    "size" INT,
    "budget" BIGINT
);

-- Step 3: Create Source Table Source2_0_1
CREATE TABLE Source2_0_1 (
    "Student ID" INT,
    "student_name" VARCHAR(255),
    "gender" CHAR(1),
    "grade" VARCHAR(50),
    "school_name" VARCHAR(255),
    "reading_score" FLOAT,
    "math_score" FLOAT
);

-- Step 4: Import data into Source tables from CSV files
COPY Source2_0_0 FROM 'D:\\lab\\vldb\\transchema\\github-pipelines-l1\\length2_0\\test_0.csv' DELIMITER ',' CSV HEADER;
COPY Source2_0_1 FROM 'D:\\lab\\vldb\\transchema\\github-pipelines-l1\\length2_0\\test_1.csv' DELIMITER ',' CSV HEADER;

-- Step 5: Drop target table if it exists
DROP TABLE IF EXISTS Target2_0;

-- Step 6: Create Target Table
CREATE TABLE Target2_0 (
    "school_name" VARCHAR(255),
    "reading_score" FLOAT
);

-- Step 7: Data Manipulation and Transformation
INSERT INTO Target2_0 ("school_name", "reading_score")
SELECT
    src1."school_name",
    AVG(src1."reading_score") AS avg_reading_score
FROM
    Source2_0_0 src0
INNER JOIN
    Source2_0_1 src1 ON src0."school_name" = src1."school_name"
GROUP BY
    src1."school_name";

-- Step 8: Export the result into a CSV file
COPY (
    SELECT * FROM Target2_0
) TO 'D:\\lab\\vldb\\transchema\\github-pipelines-l1\\length2_0\\Target2_0_result_multi_source.csv' DELIMITER ',' CSV HEADER;

  `;
  
      // CSV data example
      const csvData = `
      cst,1:00,2:00,3:00,4:00,5:00,6:00,7:00,8:00,9:00,10:00,11:00,12:00,13:00,14:00,15:00
      Fri 01/01/2016,0.001222,0.001274,0.001131,0.001222,0.001222,0.001261,0.001144,0.00117,0.00117,0.001209,0.001183,0.001235,0.001157,0.001001,0.001014
      Sat 01/02/2016,0.001313,0.001248,0.001222,0.001196,0.001196,0.001287,0.0013,0.001339,0.001352,0.001404,0.001417,0.001326,0.001313,0.001352,0.001339
      Sun 01/03/2016,0.001157,0.001092,0.001053,0.00104,0.00104,0.001066,0.001053,0.001144,0.001183,0.001248,0.001326,0.001404,0.001313,0.0013,0.001313
      Mon 01/04/2016,0.001105,0.001053,0.001001,0.000975,0.001053,0.001079,0.001183,0.00117,0.001274,0.00117,0.001157,0.001196,0.001196,0.001144,0.00117
      Tue 01/05/2016,0.001183,0.00117,0.001079,0.001131,0.00117,0.001183,0.0013,0.001365,0.001404,0.001378,0.001352,0.001326,0.001365,0.001339,0.0013
      Wed 01/06/2016,0.001391,0.001313,0.0013,0.001287,0.001313,0.001365,0.001443,0.001599,0.001547,0.001456,0.001404,0.001443,0.001365,0.00143,0.001365
      Thu 01/07/2016,0.001365,0.001287,0.001352,0.001339,0.001339,0.001339,0.001417,0.001508,0.001547,0.001495,0.001508,0.001404,0.001352,0.001404,0.001261
      Fri 01/08/2016,0.001287,0.001209,0.001196,0.00117,0.001196,0.001261,0.001339,0.001339,0.001339,0.001313,0.001287,0.00117,0.001144,0.001118,0.001105
      Sat 01/09/2016,0.001313,0.001248,0.001222,0.001196,0.001196,0.001287,0.0013,0.001339,0.001352,0.001404,0.001417,0.001326,0.001313,0.001352,0.001339
      Sun 01/10/2016,0.001157,0.001092,0.001053,0.00104,0.00104,0.001066,0.001053,0.001144,0.001183,0.001248,0.001326,0.001404,0.001313,0.0013,0.001313
      Mon 01/11/2016,0.001105,0.001053,0.001001,0.000975,0.001053,0.001079,0.001183,0.00117,0.001274,0.00117,0.001157,0.001196,0.001196,0.001144,0.00117
      Tue 01/12/2016,0.001183,0.00117,0.001079,0.001131,0.00117,0.001183,0.0013,0.001365,0.001404,0.001378,0.001352,0.001326,0.001365,0.001339,0.0013
      Wed 01/13/2016,0.001391,0.001313,0.0013,0.001287,0.001313,0.001365,0.001443,0.001599,0.001547,0.001456,0.001404,0.001443,0.001365,0.00143,0.001365
      Thu 01/14/2016,0.001365,0.001287,0.001352,0.001339,0.001339,0.001339,0.001417,0.001508,0.001547,0.001495,0.001508,0.001404,0.001352,0.001404,0.001261
      Fri 01/15/2016,0.001287,0.001209,0.001196,0.00117,0.001196,0.001261,0.001339,0.001339,0.001339,0.001313,0.001287,0.00117,0.001144,0.001118,0.001105
      Sat 01/16/2016,0.001313,0.001248,0.001222,0.001196,0.001196,0.001287,0.0013,0.001339,0.001352,0.001404,0.001417,0.001326,0.001313,0.001352,0.001339
      Sun 01/17/2016,0.001157,0.001092,0.001053,0.00104,0.00104,0.001066,0.001053,0.001144,0.001183,0.001248,0.001326,0.001404,0.001313,0.0013,0.001313
      Mon 01/18/2016,0.001105,0.001053,0.001001,0.000975,0.001053,0.001079,0.001183,0.00117,0.001274,0.00117,0.001157,0.001196,0.001196,0.001144,0.00117
      `;
      
      
  
      showDataButton.addEventListener('click', function() {
        // Split SQL code by lines
        const sqlLines = sqlCode.trim().split('\n');
  
        // Function to append each line of SQL code with a delay for effect
        function streamSQLCode(index) {
            if (index < sqlLines.length) {
              sqlContainer.textContent += sqlLines[index] + '\n';
              sqlContainer.scrollTop = sqlContainer.scrollHeight; // Scroll to bottom
              setTimeout(() => streamSQLCode(index + 1), 200); // Adjust delay as needed
            } else {
              // After streaming SQL code, display CSV data
              displayCSVData(csvData);
            }
          }
          
          function displayCSVData(data) {
            const rows = data.trim().split('\n');
            const table = document.createElement('table');
            table.classList.add('table', 'table-bordered'); // Add Bootstrap table classes
        
            rows.forEach((row, rowIndex) => {
                const tr = document.createElement('tr');
                const cols = row.split(',');
        
                cols.forEach((col, colIndex) => {
                    const cell = rowIndex === 0 ? document.createElement('th') : document.createElement('td');
                    cell.textContent = col;
        
                    if (rowIndex === 0) {
                        cell.scope = 'col'; // For accessibility, mark header cells
                    }
        
                    tr.appendChild(cell);
                });
        
                table.appendChild(tr);
            });
        
            const csvContainer = document.getElementById('csvContainer');
            csvContainer.innerHTML = ''; // Clear any existing content
            csvContainer.appendChild(table);
        }

        // Start streaming SQL code
        streamSQLCode(0);
      });
  

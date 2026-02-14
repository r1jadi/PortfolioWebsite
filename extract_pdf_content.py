import re
import os

pdf_path = r"c:\Users\Rijad\Desktop\PortfolioWebsite\Rijad Halili - Europass CV.pdf"
output_path = r"c:\Users\Rijad\Desktop\PortfolioWebsite\cv_extracted.txt"

try:
    with open(pdf_path, 'rb') as f:
        content = f.read()
    
    # Try multiple decodings
    text = ""
    try:
        text = content.decode('latin1')
    except:
        text = content.decode('utf-8', errors='ignore')

    # Extract strings inside parentheses (standard PDF text)
    # Filter for reasonable length strings to avoid garbage
    matches = re.findall(r'\(([^)]{4,})\)', text)
    
    extracted_text = []
    for m in matches:
        # Clean up the string
        clean = ''.join(c for c in m if 32 <= ord(c) < 127)
        if len(clean) > 3:
            extracted_text.append(clean)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(extracted_text))
        
    print(f"Extraction complete. Found {len(extracted_text)} lines.")

except Exception as e:
    with open(output_path, 'w') as f:
        f.write(f"Error: {str(e)}")

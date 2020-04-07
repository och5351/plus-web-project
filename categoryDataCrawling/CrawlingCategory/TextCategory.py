# -*- coding: utf-8 -*-
from CrawlingCategory.CrawlingUtil import CrawUtil
import re

class TextCategory:

    crawlingUtil = CrawUtil()

    def __init__(self, pageNum, rootPath):

        path = rootPath + '/TextCategory'
        URL = 'http://www.joara.com/literature/view/book_list.html?page_no='+ str(pageNum)+\
              '&bookpart=&sl_type=&sl_chkcost=&sl_category=&sl_search=&sl_keyword=&sl_chk=&sl_minchapter=&sl_' \
              'maxchapter=&sl_redate=&sl_orderby=&sl_othercategory=&list_type=normal&sub_category='
        links = self.crawlingUtil.text_get_link(URL)
        fileNum = self.crawlingUtil.isInDirectory(path)

        p = 0

        for count in range(len(links)):
            result_text = self.crawlingUtil.text_get_text('http://www.joara.com' + links[count])

            #result_text = result_text[19:]
            result_text = re.sub("[-=+,#/\?:%$.@*\"※~&%!r\\'|\(\)\[\]\<\>`\'\\\\n\\\\t{}◀▶▲☞“”ⓒ◇]", "", result_text)
            result_text = result_text.replace('xa0','')
            result_text = result_text.replace('u200b', '')

            if result_text.strip() == '':
                p += 1
            else:
                OUTPUT_FILE_NAME = 'TextCategory/TextCategory%05d.txt' % (count + fileNum - p)
                print(OUTPUT_FILE_NAME)
                open_output_file = open(OUTPUT_FILE_NAME, 'w', -1, "utf-8")
                open_output_file.write(result_text)
                open_output_file.close()


